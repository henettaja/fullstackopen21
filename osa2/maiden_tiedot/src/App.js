import React, { useState, useEffect } from "react"
import axios from "axios"
import Countries from "./components/Countries"

const App = () => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState("")

	handleFilterChange = (event) => {
		setFilter(event.target.value)
	}

	useEffect(() => {
		axios
			.get("https://restcountries.eu/rest/v2/all")
			.then((response) => setCountries(response.data))
	}, [])

	return (
		<>
			<h1>Maiden tiedot</h1>
			<input value={filter} onChange={handleFilterChange} />
			<Countries countries={countries} filter={filter} setFilter={setFilter} />
		</>
	)
}

export default App
