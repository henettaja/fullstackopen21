import React from "react"

const Contact = ({ name, number, handleRemovePerson }) => {
	return (
		<div>
			{name} {number} <button onClick={handleRemovePerson}>Remove</button>
		</div>
	)
}

export default Contact
