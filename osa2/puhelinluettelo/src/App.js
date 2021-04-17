import React, { useState, useEffect } from "react"

import AddPersonForm from "./components/AddPersonForm"
import People from "./components/People"
import SearchForm from "./components/SearchForm"
import StatusText from "./components/StatusText"

import personService from "./services/personsService"

const App = () => {
	const [persons, setPersons] = useState([])
	const [peopleToShow, setPeopleToShow] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [searchTerm, setSearchTerm] = useState("")
	const [status, setStatus] = useState({ msg: null, err: false })

	useEffect(() => {
		personService.getAll().then(initialPersons => setPersons(initialPersons))
	}, [])

	useEffect(() => {
		handleSearchFilter()
	}, [searchTerm, persons])

	const handleStatusText = (message, error) => {
		setStatus({ msg: message, err: error })
		setTimeout(() => {
			setStatus({ msg: null, err: false })
		}, 7000)
	}

	const handleNameChange = event => {
		setNewName(event.target.value)
	}

	const handleNumberChange = event => {
		setNewNumber(event.target.value)
	}

	const handleSearchChange = event => {
		setSearchTerm(event.target.value)
	}

	const resetInputFields = () => {
		setNewName("")
		setNewNumber("")
	}

	const handleSearchFilter = () => {
		setPeopleToShow(
			!searchTerm.length
				? persons
				: persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
		)
	}

	const addPerson = () => {
		event.preventDefault()
		const personObj = {
			name: newName,
			number: newNumber,
		}

		if (persons.some(person => person.name === newName)) {
			if (window.confirm(`${newName} is already in the phonebook, update their number?`)) {
				const existingPerson = persons.find(person => person.name === personObj.name)
				personService.update(existingPerson.id, personObj).then(updatedPerson => {
					resetInputFields()
					handleStatusText(`Updated ${existingPerson.name}'s phone number`, false)
					return setPersons(
						persons.map(person => (person.id !== existingPerson.id ? person : updatedPerson))
					)
				})
			}
		} else {
			personService.create(personObj).then(newPerson => {
				resetInputFields()
				handleStatusText(`Added ${personObj.name} to phonebook`, false)
				return setPersons(persons.concat(newPerson))
			})
		}
	}

	const removePerson = person => {
		event.preventDefault()
		if (window.confirm(`Delete ${person.name}?`)) {
			personService
				.remove(person.id)
				.then(setPersons(persons.filter(keepPerson => keepPerson.id !== person.id)))
				.then(handleStatusText(`Removed ${person.name} from phonebook`, false))
				.catch(error =>
					handleStatusText(`${person.name} has already been removed from the server`, true)
				)
		}
	}

	return (
		<>
			<h2>Phonebook</h2>
			<StatusText status={status} />
			<SearchForm searchValue={searchTerm} searchChangeHandler={handleSearchChange} />
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
