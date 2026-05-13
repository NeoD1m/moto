import { useEffect, useId, useRef, useState } from "react";
import styles from "./BookingModal.module.css";

export type BookingBike = {
  brand: string;
  model: string;
} | null;

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
  bike: BookingBike;
};

export function BookingModal({ open, onClose, bike }: BookingModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSent(false);
      setName("");
      setPhone("");
      setNote("");
    }
  }, [open]);

  if (!open) return null;

  function handleOverlayMouseDown(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.head}>
          <h2 id={titleId} className={styles.title}>
            Заявка на звонок
          </h2>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
            ×
          </button>
        </div>
        {bike ? (
          <p className={styles.context}>
            Модель: <strong>{bike.brand}</strong> {bike.model}
          </p>
        ) : null}
        {sent ? (
          <div className={styles.success}>
            <p className={styles.successTitle}>Спасибо!</p>
            <p className={styles.successText}>
              Мы получили ваши контакты и перезвоним в ближайшее рабочее время.
            </p>
            <button type="button" className={styles.primaryBtn} onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className={styles.label}>Имя</span>
              <input
                ref={firstFieldRef}
                className={styles.input}
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Телефон</span>
              <input
                className={styles.input}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
              />
            </label>
            <label className={styles.field}>
              <span className={styles.label}>Комментарий</span>
              <textarea
                className={styles.textarea}
                name="note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Удобное время для звонка или вопрос"
              />
            </label>
            <div className={styles.actions}>
              <button type="button" className={styles.ghostBtn} onClick={onClose}>
                Отмена
              </button>
              <button type="submit" className={styles.primaryBtn}>
                Отправить
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
