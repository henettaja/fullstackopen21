import React, { useState, useEffect } from "react"

import Weather from "./Weather"

const CountryExtended = ({ countryData }) => (
	<>
		<h2>{countryData.name}</h2>

		<img src={countryData.flag} width="300px" />

		<p>
			<b>Capital city:</b> {countryData.capital}
		</p>
		<p>
			<b>Population:</b> {countryData.population}
		</p>

		<h3>Current weather in {countryData.capital}</h3>
		<Weather city={countryData.capital} />

		<h3>Languages</h3>
		<ul>
			{countryData.languages.map((language) => {
				return <li key={language.iso639_2}>{language.name}</li>
			})}
		</ul>
	</>
)

export default CountryExtended
