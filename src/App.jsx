import {useEffect, useRef, useState} from "react";

import Header from "./Header";
import Circles from "./Circles";
import PersonInfo from "./PersonInfo";

// Prop drilling
const App = () => {
  const [counter, setCounter] = useState(1)
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const [id, setId] = useState(null)

  const ref = useRef(null)

  useEffect(() => {
    console.log('ref Inside', ref)

    ref.current.focus()
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

      <Header id={1} color={'blue'} counter={counter}/>
      <button ref={ref} onClick={handleAddingToCounter}>click</button>
      <Circles/>
      <PersonInfo/>

      <input value={id} onChange={e => setId(e.target.value)} type="number"/>
      <input value={text} onChange={e => setText(e.target.value)} type="text"/>

      <button onClick={getTodos}>GET TODOS</button>
      <button onClick={changeTodo}>CHANGE TODO</button>

      <div>
        {todos.map(item => <div key={item.id}><span>{item.id}</span><p>{item.title}</p></div>)}
      </div>
    </div>
  );
}

export default App;
