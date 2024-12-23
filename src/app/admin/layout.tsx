import Menu, { MenuItem } from "@/ui/components/admin/menu/menu";
import React from "react";
import style from './page.module.scss'

const menuItems: MenuItem[] = [
    { label: 'Dashboard', href: '/admin' },
    { label: 'Products', href: '/admin/products' },
    { label: 'Groups', href: '/admin/groups' },
    { label: 'Settings', href: '/admin/settings' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.layout}>
            <Menu items={menuItems}></Menu>
            <div className="content">
                {children}
            </div>
        </div>
    )
}