import { PlusCircle } from 'phosphor-react'
import styles from './input.module.css'

export function Input() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Adicione uma nova tarefa" />
        <button className={styles.button}>
          Criar
        <PlusCircle size={24} />
        </button>
    </div>
  )
}