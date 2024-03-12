import {createSlice} from "@reduxjs/toolkit";
import {todoThinkExtraReducer} from "../thunks/todoThunk";

const initialState = {
  isLoading: false,
  todoList: []
}

const TodoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    setTodos: (state, {payload}) => {
      state.todoList = payload
    }
  },
  extraReducers: builder => {
    todoThinkExtraReducer(builder)
  }
})

export const {setTodos} = TodoSlice.actions

export const todoSelector = state => state.todoSlice.todoList
export const todoLoadingSelector = state => state.todoSlice.isLoading

export default TodoSlice.reducer
