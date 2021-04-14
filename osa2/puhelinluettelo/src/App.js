import React, { useState, useEffect } from "react"

import AddPersonForm from "./components/AddPersonForm"
import People from "./components/People"
import SearchForm from "./components/SearchForm"

import personService from "./services/personsService"

const App = () => {
	const [persons, setPersons] = useState([])
	const [peopleToShow, setPeopleToShow] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [searchTerm, setSearchTerm] = useState("")

	useEffect(() => {
		personService.getAll().then((initialPersons) => setPersons(initialPersons))
	}, [])

	useEffect(() => {
		handleSearchFilter()
	}, [searchTerm, persons])

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const handleSearchFilter = () => {
		setPeopleToShow(
			!searchTerm.length
				? persons
				: persons.filter((person) =>
						person.name.toLowerCase().includes(searchTerm.toLowerCase())
				  )
		)
	}

	const addPerson = () => {
		event.preventDefault()
		const personObj = {
			name: newName,
			number: newNumber,
		}
		persons.some((person) => person.name === newName)
			? alert(`${newName} is already in the phonebook`)
			: personService.create(personObj).then((newPerson) => {
					setSearchTerm("")
					return setPersons(persons.concat(newPerson))
			  })
	}

	const removePerson = (person) => {
		event.preventDefault()
		if (window.confirm(`Delete ${person.name}?`)) {
			personService
				.remove(person.id)
				.then(
					setPersons(
						persons.filter((keepPerson) => keepPerson.id !== person.id)
					)
				)
		}
	}

	return (
		<>
			<h2>Phonebook</h2>
			<SearchForm
				searchValue={searchTerm}
				searchChangeHandler={handleSearchChange}
			/>
			<h3>Add a new contact</h3>
			<AddPersonForm
				nameValue={newName}
				numberValue={newNumber}
				formHandler={addPerson}
				nameChangeHandler={handleNameChange}
				numChangeHandler={handleNumberChange}
			/>
			<h3>Numbers</h3>
			<People peopleToShow={peopleToShow} handleRemovePerson={removePerson} />
		</>
	)
}

export default App
