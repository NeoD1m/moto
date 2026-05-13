import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>
            Андрей<span className={styles.nameAccent}>Кузнецов</span>
          </p>
          <p className={styles.tag}>Премиальный мотосалон</p>
        </div>
        <div className={styles.cols}>
          <div>
            <p className={styles.label}>Адрес</p>
            <p className={styles.value}>ул. Красная, д. 145</p>
            <p className={styles.value}>350020, Краснодар</p>
          </div>
          <div>
            <p className={styles.label}>Часы работы</p>
            <p className={styles.value}>Вт–Сб · 10:00–20:00</p>
            <p className={styles.value}>Вс–Пн · по записи</p>
          </div>
          <div>
            <p className={styles.label}>Связь</p>
            <a className={styles.link} href="mailto:info@andreykuznetsov.example">
              info@andreykuznetsov.example
            </a>
            <a className={styles.link} href="tel:+78612345678">
              +7 (861) 234-56-78
            </a>
          </div>
        </div>
        <p className={styles.legal}>
          © {new Date().getFullYear()} АндрейКузнецов. Демонстрационная витрина — бренды и модели приведены
          для примера.
        </p>
      </div>
    </footer>
  );
}
