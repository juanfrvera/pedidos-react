import { Item } from "@/lib/types/item";
import styles from "./items.module.scss";

export default function Items({ items }: { items: Item[] }) {
    return (
        <div className={styles.items}>
            {
                items.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.itemName}>{item.name}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                        <div className={styles.itemDescription}>{item.description}</div>
                    </div>
                ))
            }
        </div>
    )
}