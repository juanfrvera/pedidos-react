"use client"
import { itemGroups } from "@/lib/files/items";
import styles from "./page.module.scss";
import { useState } from "react";
import { ItemGroup } from "@/lib/types/item-group";
import Items from "@/ui/components/items/items";

export default function Home() {
  const [group, setCurrentGroup] = useState<ItemGroup>();
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.title}>Shop Title Here</div>
        <div className={styles.description}>Shop description here</div>
      </div>
      <div className={styles.body}>
        {!group ?
          // Pick a group
          <div className={styles.groups}>
            {itemGroups.map((g) => (
              <div key={g.label} onClick={() => setCurrentGroup(g)} className={styles.group}>{g.label}</div>
            ))}
          </div>
          :
          // Group selected
          <div className={styles.groupView}>
            <button className={'button ' + styles.groupGoBack} onClick={() => setCurrentGroup(undefined)}>Go back</button>
            <Items items={group.items || []} />
          </div>
        }
      </div>
    </div>
  );
}
