import type { Motorcycle } from "../data/motorcycles";
import { ProductCard } from "./ProductCard";
import styles from "./Catalog.module.css";

type CatalogProps = {
  motorcycles: Motorcycle[];
  brands: string[];
  selectedBrand: string | "all";
  onBrandChange: (b: string | "all") => void;
  onReserve: (bike: Motorcycle) => void;
};

export function Catalog({
  motorcycles,
  brands,
  selectedBrand,
  onBrandChange,
  onReserve,
}: CatalogProps) {
  return (
    <section id="catalog" className={styles.section} aria-labelledby="catalog-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>Каталог</p>
            <h2 id="catalog-heading" className={styles.title}>
              Модели в шоу-руме
            </h2>
            <p className={styles.sub}>
              Нажмите на круг расцветки, чтобы сменить фото. Цены ориентировочные в USD — уточняйте у
              менеджера по курсу и комплектации.
            </p>
          </div>
          <div className={styles.filters} role="group" aria-label="Фильтр по бренду">
            <button
              type="button"
              className={selectedBrand === "all" ? styles.pillActive : styles.pill}
              onClick={() => onBrandChange("all")}
            >
              Все бренды
            </button>
            {brands.map((b) => (
              <button
                key={b}
                type="button"
                className={selectedBrand === b ? styles.pillActive : styles.pill}
                onClick={() => onBrandChange(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        {motorcycles.length === 0 ? (
          <p className={styles.empty}>Нет моделей по выбранному фильтру.</p>
        ) : (
          <ul className={styles.grid}>
            {motorcycles.map((m) => (
              <li key={m.id}>
                <ProductCard motorcycle={m} onReserve={() => onReserve(m)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
