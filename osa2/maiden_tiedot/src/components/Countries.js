import React, { useState, useEffect } from "react"
import Country from "./Country"
import CountryExtended from "./CountryExtended"

const Countries = ({ countries, filter, setFilter }) => {
	const [filteredCountries, setFilteredCountries] = useState(countries)

	useEffect(() => {
		setFilteredCountries(
			countries.filter((country) =>
				country.name.toLowerCase().includes(filter.toLowerCase())
			)
		)
	}, [countries, filter])

	return (
		<>
			{filteredCountries.length === 1 ? (
				<CountryExtended countryData={filteredCountries[0]} />
			) : filteredCountries.length <= 10 && filteredCountries.length > 1 ? (
				filteredCountries.map((country) => {
					return (
						<Country
							key={country.alpha3Code}
							countryname={country.name}
							setFilter={setFilter}
						/>
					)
				})
			) : (
				<p>Write a more specific search term - too many matches</p>
			)}
		</>
	)
}

export default Countries
