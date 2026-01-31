import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes , setVotes] = useState (Array(anecdotes.length).fill(0) )

  const onNextAnecdote = () => {
    const randomAnecdote = () => {
      const randomNumber = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomNumber)
    }
    randomAnecdote()

  }
const onHandleVotedAnnecdote = () => {
  const copyVotes = [... votes]
  copyVotes[selected] += 1
  setVotes(copyVotes)
}
const findMaxVote = () => Math.max(...votes)


const findMostVotedAnnecdote = () => {
  const maxVote = findMaxVote()
  if (maxVote ===0) return null 
  const index = votes.indexOf(maxVote)
  return anecdotes[index] 
}

console.log(selected , votes[selected])

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <Button onClick = {onHandleVotedAnnecdote} text="vote"/>
      <Button onClick ={onNextAnecdote} text="next anecdote"/>
      <DisplayMostPopularAnnecdote noOfVotes= {findMaxVote()} anecdote ={findMostVotedAnnecdote()} />
    </>
  )
}

const Button = ({onClick , text}) =>  {
  return (
<button onClick={onClick}>{text}</button>
  )
}

const DisplayMostPopularAnnecdote = ({noOfVotes, anecdote}) => {
 const displayNoOfVotes = () => {
  if (noOfVotes === 0) {
    return (
      <>
      </>
    )
  } else  return (<p> has {noOfVotes} votes</p>)
 }
  return (
    <>
      <h3>
        Anecdotes with most votes
      </h3>
      <p>{anecdote}</p>
      {displayNoOfVotes()}
    </>
  )
}

export default App