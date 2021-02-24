import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({ prefix, value }) => {
  return (
    <tr>
      <td>{prefix}</td><td>{value}</td>
    </tr>
  )
}

const Button = ({ clickHandler, text }) => <button onClick={clickHandler}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine prefix="Good " value={good} />
          <StatisticLine prefix="Neutral " value={neutral} />
          <StatisticLine prefix="Bad " value={bad} />
          <StatisticLine prefix="Overall " value={good + neutral + bad} />
          <StatisticLine prefix="Average " value={((good - bad) / (good + neutral + bad)).toFixed(2)} />
          <StatisticLine prefix="% postive " value={Math.round((good / (good + neutral + bad)) * 100)} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (func, value) => func(value)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" clickHandler={() => setToValue(setGood, good + 1)} />
      <Button text="Neutral" clickHandler={() => setToValue(setNeutral, neutral + 1)} />
      <Button text="Bad" clickHandler={() => setToValue(setBad, bad + 1)} />
      {good | neutral | bad
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <p>No statistics to show</p>
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)