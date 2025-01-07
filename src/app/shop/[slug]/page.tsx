"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { ItemGroup } from "@/lib/types/item-group";
import { itemGroups } from "@/lib/files/items";
import Items from "@/ui/components/items/items";
import { useParams } from "next/navigation";

export default function Shop() {
  const [group, setCurrentGroup] = useState<ItemGroup>();
  const [ui, setUi] = useState<UI | undefined>(undefined);
  const params = useParams();

  useEffect(() => {
    const slug = params.slug as string;
    console.log(params);
    setUi({
      slug,
    });
  }, []);

  if (ui !== undefined) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.title}>Shop Title Here</div>
          <div className={styles.description}>Shop description here</div>
          <div>{ui.slug}</div>
        </div>
        <div className={styles.body}>
          {!group ? (
            // Pick a group
            <div className={styles.groups}>
              {itemGroups.map((g) => (
                <div
                  key={g.label}
                  onClick={() => setCurrentGroup(g)}
                  className={styles.group}
                >
                  {g.label}
                </div>
              ))}
            </div>
          ) : (
            // Group selected
            <div className={styles.groupView}>
              <button
                className={"button " + styles.groupGoBack}
                onClick={() => setCurrentGroup(undefined)}
              >
                Go back
              </button>
              <Items items={group.items || []} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
}

interface UI {
  slug: string;
}
