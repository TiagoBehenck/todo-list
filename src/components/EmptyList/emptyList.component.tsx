import { ClipboardText } from 'phosphor-react'

import styles from './emptyList.module.css'

export function EmptyList() { 
  return ( 
    <div className={styles.wrapper}>
      <ClipboardText size={56} />
      <p className={styles.textBold}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}