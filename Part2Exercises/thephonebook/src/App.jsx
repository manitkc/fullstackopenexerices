import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState("")
  const [newNumber , setNewNumber ] = useState("")

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
}

  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some((person) => 
      person.name === newName
    )

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    setPersons(persons.concat(
      {name : newName,
      number : newNumber

    }
  ))
    setNewName("")
    setNewNumber("")
  }
  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input  
          onChange = {handleNameChange}
          value = {newName}/>
        </div>
        <div>
          number: <input
          onChange={handleNewNumber}
          value={newNumber}
          
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key = {person.name}> {person.name} {person.number}  </p>
       ))}
    </div>
  )
}

export default App