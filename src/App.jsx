import {useEffect, useRef, useState} from "react";
import { Link, useNavigate, Navigate } from 'react-router-dom'

import Header from "./layout/Header";
import Circles from "./components/Circles";
import PersonInfo from "./components/PersonInfo";

// Prop drilling
const App = () => {
  const navigate = useNavigate();

  const [counter, setCounter] = useState(0)
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [id, setId] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    console.log('ref Inside', ref)

    // ref.current.focus()
  }, [])

  const handleAddingToCounter = () => {
    // setCounter(counter + 1)
    // console.log(counter)
    // setCounter(counter + 2)
    // console.log(counter)
    // setCounter(counter + 3)
    // console.log(counter)
    // setCounter(counter + 4)
    // setCounter(counter + 11)

    setCounter(prev => ++prev)
    console.log(counter)
    setCounter(prev => {
      console.log('prev', prev)

      return ++prev
    })
    setCounter(prev => ++prev)
    setCounter(prev => ++prev)
    setCounter(prev => ++prev)
  }

  const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setTodos(res))
      .catch(err => console.error(err))
  }

  const changeTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'put',
      body: JSON.stringify({
        "userId": 1,
        "id": 2,
        "title": text,
        "completed": false
      })
    })
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      {/*<div>*/}
      {/*  {*/}
      {/*    !!(counter % 2) && <Header id={1} color={'blue'}/>*/}
      {/*  }*/}
      {/*</div>*/}

      {/*<button ref={ref} onClick={handleAddingToCounter}>click</button>*/}

      <Circles/>
      <PersonInfo/>

      <input value={id} onChange={e => setId(e.target.value)} type="number"/>
      <input value={text} onChange={e => setText(e.target.value)} type="text"/>

      {!!counter && <Navigate to={'/todos'}/>}

      {/*<button onClick={() => navigate('/todos', { state: 100, replace: true })}>GO TO TODOS</button>*/}
      <button onClick={handleAddingToCounter}>GO TO TODOS</button>

      <button onClick={getTodos}>GET TODOS</button>
      <button onClick={changeTodo}>CHANGE TODO</button>

      <div>
        {todos.map(item => <div key={item.id}><span>{item.id}</span><p>{item.title}</p></div>)}
      </div>
    </div>
  );
}

export default App;
