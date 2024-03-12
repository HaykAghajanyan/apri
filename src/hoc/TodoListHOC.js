import {useTodosProvider} from "../contexts/TodosProvider";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {TodoThunk} from "../redux/thunks/todoThunk";
import {todoSelector} from "../redux/slices/todoSlice";


const TodoListHOC = ({children}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(TodoThunk())
  }, [dispatch])

  return <div>{children}</div>
}

export default TodoListHOC
