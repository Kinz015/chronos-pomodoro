import styles from "./styles.module.css"

type Icons = {
  children: React.ReactNode
}

export function PageButton( {children}: Icons ) {
  return <a className={styles.menuLink} href="#">{children}</a>
}