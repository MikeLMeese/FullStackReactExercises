import { useState } from 'react'

// 1.12 - Add a button that can be clicked to display a random quote from anecdotes
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  // 1.13 - Add a vote feature for the displayed anecdote
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0, 0])
  // 1,14 - Display anecdote with largest amount of votes
  const [highestPoints, setHighestPoints] = useState(0)

  const changeVote = () => {
    const copy = [...vote]
    copy[selected]+=1
    setVote(copy)
    setHighestPoints(copy.indexOf(Math.max(...copy)))
  }
  const randomQuote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h2>This anecdote has {vote[selected]} votes</h2>
      <button onClick = {randomQuote}>Next Anecdote</button>
      <button onClick = {changeVote}>Vote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <h2>{anecdotes[highestPoints]}</h2>
      <h2>This anecdote is leading with {vote[highestPoints]} votes</h2>
    </div>
  )
}

export default App