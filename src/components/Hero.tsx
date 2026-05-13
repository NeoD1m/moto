import styles from "./Hero.module.css";

type HeroProps = {
  onBrowse: () => void;
};

export function Hero({ onBrowse }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Официальный мультибрендовый салон</p>
          <h1 id="hero-heading" className={styles.title}>
            Мотоциклы для дороги вперёд
          </h1>
          <p className={styles.lead}>
            Подберите расцветку по каталогу среди Ducati, Honda, Kawasaki, Suzuki и Yamaha.
            Понятные цены, ключевые характеристики и сопровождение при бронировании.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={onBrowse}>
              Смотреть каталог
            </button>
            <a className={styles.secondary} href="#experience">
              Почему ApexMoto
            </a>
          </div>
          <dl className={styles.stats}>
            <div>
              <dt className={styles.dt}>Бренды</dt>
              <dd className={styles.dd}>5 направлений</dd>
            </div>
            <div>
              <dt className={styles.dt}>Цвета</dt>
              <dd className={styles.dd}>3 на модель</dd>
            </div>
            <div>
              <dt className={styles.dt}>Поддержка</dt>
              <dd className={styles.dd}>Персональный менеджер</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
