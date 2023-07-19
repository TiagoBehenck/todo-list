import styles from './header.module.css'

import todoListLogo from '../../assets/todo-list-logo.svg'

export function Header() { 
  return ( 
    <header className={styles.header}>
      <img src={todoListLogo} alt="logotipo do todo list" />
    </header>
  )
}