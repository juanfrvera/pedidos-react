'use client'
import { useState } from 'react';
import style from './menu.module.scss'
import Link from 'next/link';

export default function Menu({ items }: { items: MenuItem[] }) {
    const [open, setOpen] = useState(false)
    return <div className={style.menu}>
        <button onClick={() => setOpen(!open)} className={style.hamburguer}>Menu</button>
        {open &&
            <div className={style.menuItems}>
                {
                    items.map((item) => (
                        <div key={item.href} className={style.menuItem}>
                            <Link href={item.href}>{item.label}</Link>
                        </div>
                    ))
                }
            </div>
        }
    </div>
}

export interface MenuItem {
    label: string;
    href: string;
}