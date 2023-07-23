import { Trash } from "phosphor-react";

import styles from './todo.module.css'

export function Todo() { 
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" />
      <p className={styles.paragraph}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <Trash size={24} />
    </div>
  )
}