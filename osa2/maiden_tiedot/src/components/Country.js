import React from "react"

const Country = ({ countryname, setFilter }) => {
	const filterHandler = (text) => {
		setFilter(text)
	}

	return (
		<>
			<p>{countryname}</p>
			<button onClick={() => filterHandler(countryname)}>Show</button>
		</>
	)
}

export default Country
