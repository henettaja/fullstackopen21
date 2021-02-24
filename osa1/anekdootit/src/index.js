import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [mostVotes, setMostVotes] = useState(null)
    const [votes, setVotes] = useState({})


    React.useEffect(() => {
        Object.values(votes).length ? anecdoteWithMostVotes() : console.log("No votes");
    }, [votes])

    React.useEffect(() => {
        getRandomAnecdote();
    }, [])

    const getRandomAnecdote = () => {
        min = Math.ceil(0);
        max = Math.floor(anecdotes.length - 1);
        int = Math.floor(Math.random() * (max - min) + min);
        setSelected(int);
    }

    const anecdoteWithMostVotes = () => {
        const maxvotes = Object.entries(votes).reduce((maxVotes, currentVotes) => maxVotes[1] > currentVotes[1] ? maxVotes : currentVotes)[0]

        setMostVotes(parseInt(maxvotes))
    }

    const voteAnecdote = (anecdoteIndex) => {
        setVotes({ ...votes, [selected]: votes[selected] === undefined ? 1 : votes[selected] + 1 })
    }

    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>
                {props.anecdotes[selected]}
            </div>
            <br />
            { votes[selected]
                ? <div>Votes: {votes[selected]}</div>
                : <div>This anecdote doesn't have any votes yet</div>
            }
            <button onClick={() => getRandomAnecdote()}>Random anecdote</button>
            <button onClick={() => voteAnecdote(selected)}>Vote this anecdote</button>
            <h2>Anecdote with the most votes</h2>
            { mostVotes !== null
                ? <div>{props.anecdotes[mostVotes]}</div>
                : <div>No votes in the system</div>
            }

        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)