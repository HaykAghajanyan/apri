import {useTodosProvider} from "../../contexts/TodosProvider";
import './index.css'
import {useCallback, useMemo, useState} from "react";
import Todo from "./Todo";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {todoLoadingSelector, todoSelector} from "../../redux/slices/todoSlice";

const TodoList = ({setTodos, postTodos, addTodo, deleteTodo, changeTodo}) => {
  const location = useLocation()
  console.log('location ', location)
  const todos = useSelector(todoSelector)
  const isLoading = useSelector(todoLoadingSelector)

  const [title, setTitle] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const deleteTodoHandler = useCallback(id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
    deleteTodo(id)
  }, [])

  const changeTodoHandler = useCallback(id => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        changeTodo(id, {completed: !todo.completed})

        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo
    }))
  }, [])

  const memoizedObj = useMemo(() => {
    return Math.random()
  }, [])

  return (
    <div className='todo-container'>
      <button type='button' onClick={(e) => postTodos(e, todos)}>Post todos to server</button>

      <input value={title} onChange={e => setTitle(e.target.value)} type="text"/>
      <input value={isCompleted} type="checkbox" onChange={e => setIsCompleted(e.target.checked)}/>
      <button onClick={() => addTodo({title, isCompleted})}>Add todo</button>

      {
        isLoading
          ? <div>Loading</div>
          : todos.map(({id, title, completed}) => (
            <Todo
              key={id}
              id={id}
              title={title}
              completed={completed}
              deleteTodoHandler={deleteTodoHandler}
              changeTodoHandler={changeTodoHandler}
            />
          ))
      }
    </div>
  )
}

export default TodoList
