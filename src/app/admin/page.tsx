import Menu, { MenuItem } from '@/components/admin/menu/menu'
import style from './page.module.scss'

const menuItems: MenuItem[] = [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Products', id: 'products' },
  { label: 'Groups', id: 'groups' },
  { label: 'Settings', id: 'settings' },
]

export default async function Admin() {
  return <div className={style.admin}>
    <Menu items={menuItems}></Menu>
    <div className={style.content}>
      <div className={style.header}>
        <div className={style.welcome}>Welcome, Shop or Username</div>
      </div>
      <div className={style.body}>
        Some content here
      </div>
    </div>
  </div>
}
