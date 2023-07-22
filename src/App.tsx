import { Header, Input } from './components'

import './global.css'
import styles from './app.module.css'

export default function App() { 
  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Input />
        <main>
          <head>
            <p className={styles.todosCreated}>
              Tarefas criadas 
              <span className={styles.counter}>0</span>
            </p>
            <p className={styles.todosDone}>
              Concluídas 
              <span className={styles.counter}>0</span>
            </p>
          </head>
        </main>
      </section>
    </>
  )
}