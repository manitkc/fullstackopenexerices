import { useState , useEffect } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook.jsx'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState("")
  const [newNumber , setNewNumber ] = useState("")
  const [filterName , setFilterName ] = useState("")
  const [showFilter , setShowFilter] = useState(false)


  const hook = () => {
    console.log("effect")
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log (response.data)
      setPersons(response.data )
    })
  }

  useEffect(hook , [])

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
    setNewNumber(event.target.value)
}

  const addName = (event) => {
    event.preventDefault()

    const PersonObject = {
      name: newName ,
      number : newNumber ,
    }
    
    const nameExists = persons.some((person) => 
              person.name === newName
    )

    if (nameExists) {
      // grab the id of name 
      alert(`${newName} is already added to phonebook, replace the old with a new one`)
      const foundPerson  = persons.find(person => person.name  ===  newName)

      const changedPersonObject = {...foundPerson,
                                      number: newNumber
                                  }
  
      axios.put(`http://localhost:3001/persons/${foundPerson.id}`, changedPersonObject).then(response => {
        setPersons(persons.map(person => person.id === foundPerson.id
          ? response.data 
          : person
        ))
      })
      setNewName("")
      setNewNumber("")
      return 
    }


    axios.post("http://localhost:3001/persons", PersonObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName("")
            setNewNumber("")
            })
      }

  const onHandleDelete = id => {
    axios.delete(`http://localhost:3001/persons/${id}`).then(response => {
      setPersons(persons.filter(person=> person.id !== id))
    })
    .catch(error => {
      alert ("This person was already removed from the server")
      setPersons(persons.filter(person=> person.id !== id))
    }
      
    )
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
        <Person 
          key= {person.id} 
          name = {person.name} 
          number = {person.number} 
          onHandleDelete={()=> onHandleDelete(person.id)}/>
       ))}
    </div>
  )
}

export default App