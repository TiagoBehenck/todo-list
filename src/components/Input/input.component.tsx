import { ChangeEvent } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './input.module.css'

interface IInputProps { 
  todoText: string
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void
  onCreateNewTodo: () => void
}

export function Input({ todoText, onTextChange, onCreateNewTodo }: IInputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        value={todoText}
        onChange={onTextChange} 
        className={styles.input} 
        placeholder="Adicione uma nova tarefa" 
      />
      <button onClick={onCreateNewTodo} className={styles.button}>
          Criar
        <PlusCircle size={24} />
        </button>
    </div>
  )
}