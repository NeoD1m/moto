import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.name}>ApexMoto</p>
          <p className={styles.tag}>Премиальный мотосалон</p>
        </div>
        <div className={styles.cols}>
          <div>
            <p className={styles.label}>Адрес</p>
            <p className={styles.value}>ул. Моторная, 12, стр. 3</p>
            <p className={styles.value}>Москва, 125319</p>
          </div>
          <div>
            <p className={styles.label}>Часы работы</p>
            <p className={styles.value}>Вт–Сб · 10:00–20:00</p>
            <p className={styles.value}>Вс–Пн · по записи</p>
          </div>
          <div>
            <p className={styles.label}>Связь</p>
            <a className={styles.link} href="mailto:info@apexmoto.example">
              info@apexmoto.example
            </a>
            <a className={styles.link} href="tel:+74951234567">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
        <p className={styles.legal}>
          © {new Date().getFullYear()} ApexMoto. Демонстрационная витрина — бренды и модели приведены
          для примера.
        </p>
      </div>
    </footer>
  );
}
