import styles from "./Header.module.css";

type HeaderProps = {
  onBook: () => void;
};

export function Header({ onBook }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="АндрейКузнецов — на главную">
          <span className={styles.wordmark}>
            Андрей<span className={styles.wordmarkAccent}>Кузнецов</span>
          </span>
        </a>
        <nav className={styles.nav} aria-label="Основное меню">
          <a href="#catalog">Каталог</a>
          <a href="#experience">О салоне</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button type="button" className={styles.cta} onClick={onBook}>
          Забронировать
        </button>
      </div>
    </header>
  );
}
