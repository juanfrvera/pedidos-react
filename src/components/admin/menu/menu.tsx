'use client'
import { useState } from 'react';
import style from './menu.module.scss'

export default function Menu({ items }: { items: MenuItem[] }) {
    const [open, setOpen] = useState(false)
    return <div className={style.menu}>
        <button onClick={() => setOpen(!open)} className={style.hamburguer}>Menu</button>
        {open &&
            <div className={style.menuItems}>
                {
                    items.map((item) => (
                        <div key={item.id} className={style.menuItem}>{item.label}</div>
                    ))
                }
            </div>
        }
    </div>
}

export interface MenuItem {
    label: string;
    id: string;
}