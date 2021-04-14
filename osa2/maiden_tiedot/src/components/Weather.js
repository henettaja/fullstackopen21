import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ city }) => {
	const api_key = process.env.API_KEY

	const [weather, setWeather] = useState({
		temperature: "Loading...",
		weather_descriptions: ["Loading..."],
		weather_icons: [],
	})

	useEffect(() => {
		axios
			.get(
				`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
			)
			.then((response) => setWeather(response.data.current))
	}, [city])

	console.log(weather)

	return (
		<>
			<img src={weather.weather_icons[0]} width="40px" />
			<p>
				<b>{!weather ? "Error..." : weather.weather_descriptions[0]}</b>
			</p>
			<p>
				<b>Temperature:</b> {!weather ? "Error..." : weather.temperature}°C
			</p>
		</>
	)
}

export default Weather
