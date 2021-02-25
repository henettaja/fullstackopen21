import React, { useState } from 'react'
import AddPersonForm from './components/AddPersonForm'
import Contact from './components/Contact'
import People from './components/People'
import SearchForm from './components/SearchForm'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    },
    {
      name: 'Henri Väisänen',
      number: '044-5222518'
    },
    {
      name: 'Salla-Mari Uitto',
      number: '040-12345678'
    },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const peopleToShow = !searchTerm.length
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const addPerson = () => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber
    }
    persons.some(person => person.name === newName)
      ? alert(`${newName} is already in the phonebook`)
      : setPersons(persons.concat(nameObj))
  }

  return (
    <>
      <h2>Phonebook</h2>
      <SearchForm searchValue={searchTerm} searchChangeHandler={handleSearchChange} />
      <h3>Add a new contact</h3>
      <AddPersonForm
        nameValue={newName}
        numberValue={newNumber}
        formHandler={addPerson}
        nameChangeHandler={handleNameChange}
        numChangeHandler={handleNumberChange} />
      <h3>Numbers</h3>
      <People peopleToShow={peopleToShow} />
    </>
  )

}

export default App