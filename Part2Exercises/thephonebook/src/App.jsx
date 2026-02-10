import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState("")



  const handleNumberChange = (event) => {
    console.log(event.target.value)
    console.log("form submitted" , event.target)
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()

    const nameExists = persons.some((person) => 
      person.name === newName
    )

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    
    setPersons(persons.concat({name : newName}))
    setNewName("")
  }
  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addNumber}>
        <div>
          name: <input  
          onChange = {handleNumberChange}
          value = {newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key = {person.name}> {person.name} </p>
       ))}
    </div>
  )
}

export default App