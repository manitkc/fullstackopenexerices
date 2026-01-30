import { useState } from 'react'


function App() {
  const [good , setGood] = useState(0)
  console.log(good)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

  const onHandleGoodButton = () => {
    setGood(good + 1)
  }

  const onHandleNeutralButton = () => {
    setNeutral(neutral + 1)
  }

  const onHandleBadButton = () => {
    setBad(bad + 1)
  
  }

  return (
    <>
    <Header/>
    <Button onClick={onHandleGoodButton} text="Good"/>
    <Button onClick={onHandleNeutralButton} text="Neutral"/>
    <Button onClick={onHandleBadButton} text="Bad"/>
    <StatisticsHeader/>
    <StatisitcsInfo good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

const Header = () => <h2>give feedback</h2>

const Button = ({onClick,text}) => <button onClick = {onClick}> {text} </button>

const StatisticsHeader = () => <h2>Statistics</h2>

const StatisitcsInfo = ({good ,neutral , bad}) => {
  return (
    <>
    <p>
     good {good}
    </p>
    <p>
     neutral {neutral}
    </p>
    <p>
     bad {bad}
    </p>

    </>
  )
}

export default App
