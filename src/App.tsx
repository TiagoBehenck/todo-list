import { ChangeEvent, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EmptyList, Header, Input, Todo } from './components'

import './global.css'
import styles from './app.module.css'

interface ITodo {
  id: string,
  content: string,
  isComplete: boolean
}

export default function App() {
  const [newTodoText, setNewTodoText] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])
  const [todosDone, setTodosDone] = useState(0)

  const totalTodos = todos.length
  const hasTodos = totalTodos > 0

  useEffect(() => {
    const doneTodos = todos.reduce((acc, todo) => {
      if (todo.isComplete) return acc + 1
      return acc
    }, 0)

    setTodosDone(doneTodos)
  }, [todos])

  const handleAddNewTodo = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setNewTodoText(event.target.value)
  }

  const handleCreateNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoText,
      isComplete: false,
    }

    setTodos([...todos, newTodo])
    setNewTodoText('')
  }

  const handleDeleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => id !== todo.id)
    setTodos(newTodos)
  }

  const handleToggleDoneTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <Input
          todoText={newTodoText}
          onTextChange={handleAddNewTodo}
          onCreateNewTodo={handleCreateNewTodo}
        />
        <main>
          <div className={styles.aboutTodos}>
            <p className={styles.todosCreated}>
              Tarefas criadas
              <span className={styles.counter}>
                {totalTodos}
              </span>
            </p>
            <p className={styles.todosDone}>
              Concluídas
              <span className={styles.counter}>
                {todosDone}
              </span>
            </p>
          </div>

          {!hasTodos ? (
            <EmptyList />
          ) : (
            todos.map(todo =>
              <Todo
                key={todo.id}
                id={todo.id}
                content={todo.content}
                isComplete={todo.isComplete}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleDoneTodo}
              />
            )
          )}
        </main>
      </section>
    </>
  )
}