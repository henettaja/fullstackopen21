import React from "react"
import Contact from "./Contact"

const People = ({ peopleToShow }) => {
	return (
		<>
			{peopleToShow.map((person) => (
				<Contact key={person.name} name={person.name} number={person.number} />
			))}
		</>
	)
}

export default People
