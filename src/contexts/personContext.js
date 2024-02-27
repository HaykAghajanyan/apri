import {useState, createContext, useContext, useEffect} from "react";

export const PersonContext = createContext(null)

const PersonProvider = ({children}) => {
  const [alt, setAlt] = useState('Alt picture')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setTodos(res))
      .catch(err => console.error(err))
  }, [])


  return (
    <PersonContext.Provider value={{alt, todos, setTodos}}>
      {children}
    </PersonContext.Provider>
  )
}

export const usePersonInfo = () => useContext(PersonContext)

export default PersonProvider
