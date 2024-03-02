import {useState, createContext, useContext, useEffect} from "react";

export const PersonContext = createContext(null)

const PersonProvider = ({children}) => {
  const [alt, setAlt] = useState('Alt picture')

  return (
    <PersonContext.Provider value={{alt}}>
      {children}
    </PersonContext.Provider>
  )
}

export const usePersonInfo = () => useContext(PersonContext)

export default PersonProvider
