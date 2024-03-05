import {useTodosProvider} from "../contexts/TodosProvider";

const TodoListHOC = ({ children }) => {
  const {todos, setTodos, postTodos, addTodo, deleteTodo, changeTodo} = useTodosProvider();

  return <div>
    {
      !!todos.length
      ? <div>{children}</div>
      : <div>Loading</div>
    }
  </div>
}

export default TodoListHOC
