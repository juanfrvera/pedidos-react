import styles from "./page.module.scss";

const categories = [
  {
    label: "Pizzas",
  },
  {
    label: "Drinks",
  },
  {
    label: "Desserts",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>Shop Title Here</div>
        <div className={styles.description}>Shop description here</div>
      </div>
      <div className="body">
        <div className="categories">
          {categories.map((c) => (
            <div key={c.label}>{c.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
