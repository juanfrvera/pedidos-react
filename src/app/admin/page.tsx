import style from './page.module.scss'

export default async function Admin() {
  return <div className={style.admin}>
    <div className={style.header}>
      <div className={style.welcome}>Welcome, Shop or Username</div>
    </div>
    <div className={style.body}>
      Some content here
    </div>
  </div>
}
