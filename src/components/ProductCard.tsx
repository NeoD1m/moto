import { useState, type CSSProperties } from "react";
import type { Motorcycle, MotoColor } from "../data/motorcycles";
import { COLORS, colorLabel, imagePath } from "../data/motorcycles";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  motorcycle: Motorcycle;
  onReserve: () => void;
};

function formatPrice(n: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function ProductCard({ motorcycle: m, onReserve }: ProductCardProps) {
  const defaultColor = m.colors[0] ?? "red";
  const [color, setColor] = useState<MotoColor>(defaultColor);
  const src = imagePath(m.folder, color);
  const altColor = colorLabel(color);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <div className={styles.imageWrap}>
          <img
            src={src}
            alt={`${m.brand} ${m.model}, расцветка «${altColor}»`}
            className={styles.image}
            width={800}
            height={600}
            loading="lazy"
          />
        </div>
        <span className={styles.year}>{m.year}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.brand}>{m.brand}</p>
        <h3 className={styles.model}>{m.model}</h3>
        <p className={styles.tagline}>{m.tagline}</p>
        <div className={styles.swatches} role="group" aria-label="Выбор расцветки">
          {COLORS.filter((c) => m.colors.includes(c.id)).map((c) => (
            <button
              key={c.id}
              type="button"
              className={color === c.id ? styles.swatchActive : styles.swatch}
              style={{ "--swatch": c.hex } as CSSProperties}
              onClick={() => setColor(c.id)}
              title={c.label}
              aria-pressed={color === c.id}
              aria-label={`Оттенок «${c.label}»`}
            />
          ))}
        </div>
        <dl className={styles.specs}>
          <div>
            <dt>Объём</dt>
            <dd>{m.specs.displacement}</dd>
          </div>
          <div>
            <dt>Мощность</dt>
            <dd>{m.specs.power}</dd>
          </div>
          <div>
            <dt>Крутящий момент</dt>
            <dd>{m.specs.torque}</dd>
          </div>
          <div>
            <dt>Масса</dt>
            <dd>{m.specs.weight}</dd>
          </div>
        </dl>
        <div className={styles.footer}>
          <p className={styles.price}>
            От <strong>{formatPrice(m.priceUsd)}</strong>
          </p>
          <button type="button" className={styles.reserve} onClick={onReserve}>
            Забронировать
          </button>
        </div>
      </div>
    </article>
  );
}
