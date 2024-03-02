import {createContext, useContext, useEffect, useState} from "react";

const TodosContext = createContext(null)

const TodosProvider = ({children}) => {
  const [todos, setTodos] = useState([])

  const addTodo = ({ title, isCompleted }) => {
    fetch('http://localhost:3001/todos', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'post',
      body: JSON.stringify({ title, completed: isCompleted })
    })
      .catch(err => console.error(err))
  }

  const changeTodo = (id, changedTodo) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'patch',
      body: JSON.stringify(changedTodo)
    })
      .catch(err => console.error(err))
  }

  const deleteTodo = id => {
    fetch(`http://localhost:3001/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'delete',
    })
      .catch(err => console.error(err))
  }

  const postTodos = (e, data) => {
    e.preventDefault()
    fetch('http://localhost:3001/todos', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'post',
      body: JSON.stringify(data)
    })
      .then(res => console.log('post response', res.json()))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(res => setTodos(res))
      .catch(err => console.error(err))
  }, [])

  const obj = {
    todos,
    setTodos,
    postTodos,
    addTodo,
    deleteTodo,
    changeTodo
  }

  return <TodosContext.Provider value={obj}>
    {children}
  </TodosContext.Provider>
}

export const useTodosProvider = () => useContext(TodosContext)

export default TodosProvider
