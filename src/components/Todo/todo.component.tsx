import { Trash } from "phosphor-react";

import styles from './todo.module.css'

interface TodoProps {
  id: string
  content: string
  isComplete: boolean
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export function Todo({ 
  id,
  content,
  isComplete,
  onToggleTodo,
  onDeleteTodo,
}: TodoProps) { 
  const contentStyle = isComplete ? styles.paragraphDone : styles.paragraph 
  
  const handleDeleteTodo = () => {
    onDeleteTodo(id)
  }
  
  const handleDoneTodo = () => { 
    onToggleTodo(id)
  }

  return (
    <div className={styles.wrapper}>
      <input
        onChange={handleDoneTodo} 
        type="checkbox"
        id={content}
      />
      <label htmlFor={content} className={contentStyle}>{content}</label>
      <Trash onClick={handleDeleteTodo} size={24} />
    </div>
  )
}