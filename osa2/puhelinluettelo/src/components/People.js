import React from "react"
import Contact from "./Contact"

const People = ({ peopleToShow, handleRemovePerson }) => {
	return (
		<>
			{peopleToShow.map((person) => (
				<Contact
					key={person.id}
					name={person.name}
					number={person.number}
					handleRemovePerson={() => handleRemovePerson(person)}
				/>
			))}
		</>
	)
}

export default People
