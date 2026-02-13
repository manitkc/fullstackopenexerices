import { useState } from 'react'
import Phonebook from './components/Phonebook.jsx'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState("")
  const [newNumber , setNewNumber ] = useState("")
  const [filterName , setFilterName ] = useState("")
  const [showFilter , setShowFilter] = useState(false)

  
  const showFilterName = showFilter
  ? persons.filter(person => person.name.toLowerCase().startsWith(filterName.toLowerCase())) 
  : persons

  console.log(showFilterName)

  const handleNameFilter = (event) => {
    setFilterName(event.target.value)
    setShowFilter(true)

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
}

  const addName = (event) => {
    event.preventDefault()

    const PersonObject = {
      name: newName ,
      number : newNumber ,
      id : persons.length +1 
    }

    const nameExists = persons.some((person) => 
      person.name === newName
    )

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return 
    }
    setPersons(persons.concat(
      PersonObject
  ))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook name={filterName} onHandleChange = {handleNameFilter} />
      <h3>add a new</h3>
      <PersonForm onhandleSubmission = {addName}
                  onHandleNameChange = {handleNameChange}
                  name = {newName}
                  onHandleNumberChange = {handleNewNumber}
                  number = {newNumber}/>
      <h2>Numbers</h2>
      {showFilterName.map((person) => (
        <Person key= {person.id} name = {person.name} number = {person.number}/>
       ))}
    </div>
  )
}

export default App