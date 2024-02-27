import {useState} from "react";
import PersonImage from "./PersonImage";

const PersonInfo = () => {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState(null)
  const [person, setPerson] = useState({
    name: 'Vacho',
    age: 33
  })

  const handlePersonChange = (e) => {
    e.preventDefault()
    setPerson({
      name: nameInput,
      age: ageInput
    })
  }

  const changeAge = () => {
    setPerson(prev => ({
      ...prev,
      age: prev.age + 1
    }))
  }

  return (
    <div className='person-container'>
      {/*<span>Person name - {person.name}</span>*/}
      {/*<span>Person age - {person.age}</span>*/}
      {/*<button onClick={changeAge}>change age</button>*/}

      <PersonImage />

      {/*<form className='person-form'>*/}
      {/*  <label htmlFor="name">name</label>*/}
      {/*  <input onChange={e => setNameInput(e.target.value)} id='name' type="text"/>*/}
      {/*  <label htmlFor="age">age</label>*/}
      {/*  <input value={ageInput} onChange={e => setAgeInput(e.target.value)} id='age' type="text"/>*/}
      {/*  <button type='submit' onClick={handlePersonChange}>save</button>*/}
      {/*</form>*/}
    </div>
  )
}

export default PersonInfo
