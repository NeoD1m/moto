import styles from "./ExperienceStrip.module.css";

export function ExperienceStrip() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="exp-heading">
      <div className={styles.inner}>
        <h2 id="exp-heading" className={styles.heading}>
          Салонный сервис без навязчивого давления
        </h2>
        <ul className={styles.list}>
          <li>
            <span className={styles.num}>01</span>
            <h3 className={styles.title}>Цвет как вживую</h3>
            <p className={styles.text}>
              В карточках используются фирменные изображения расцветок — то, что вы видите на экране,
              соответствует витрине.
            </p>
          </li>
          <li>
            <span className={styles.num}>02</span>
            <h3 className={styles.title}>Прозрачные ориентиры по цене</h3>
            <p className={styles.text}>
              На сайте — понятные вилки без скрытых строк в каталоге; итоговую смету и комплектацию
              подтверждает менеджер.
            </p>
          </li>
          <li>
            <span className={styles.num}>03</span>
            <h3 className={styles.title}>Сопровождение сделки</h3>
            <p className={styles.text}>
              Забронируйте конфигурацию — мы фиксируем окно поставки и помогаем с кредитом, страховкой
              и выдачей.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
