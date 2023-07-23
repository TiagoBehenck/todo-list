import { useState } from 'react'
import { Header, Input, Todo } from './components'

import './global.css'
import styles from './app.module.css'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'teste',
      isComplete: false,
    }
  ])

  const totalTodos = todos.length

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Input />
        <main>
          <head className={styles.aboutTodos}>
            <p className={styles.todosCreated}>
              Tarefas criadas 
              <span className={styles.counter}>{totalTodos}</span>
            </p>
            <p className={styles.todosDone}>
              Concluídas 
              <span className={styles.counter}>2</span>
            </p>
          </head>

          {todos.map(todo => <Todo />)}
        </main>
      </section>
    </>
  )
}