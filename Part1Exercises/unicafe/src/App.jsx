import { useState } from 'react'


function App() {
  const [good , setGood] = useState(0)
  const [neutral , setNeutral] = useState(0)
  const [bad , setBad] = useState(0)
  const  [review , setReview] = useState([])

  const onHandleGoodButton = () => {
    setGood(good + 1)
    setReview(review.concat(1))
  }

  const onHandleNeutralButton = () => {
    setNeutral(neutral + 1)
    setReview(review.concat(0))
  }

  const onHandleBadButton = () => {
    setBad(bad + 1)
    setReview(review.concat(-1))
  }

  return (
    <>
    <Header/>
    <Button onClick={onHandleGoodButton} text="Good"/>
    <Button onClick={onHandleNeutralButton} text="Neutral"/>
    <Button onClick={onHandleBadButton} text="Bad"/>
    <StatisticsHeader/>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <Statisitcs good={good} neutral={neutral} bad={bad} review ={review}/>
    </>
  )
}

const Header = () => <h2>give feedback</h2>

const Button = ({onClick,text}) => <button onClick = {onClick}> {text} </button>

const StatisticsHeader = () => <h2>Statistics</h2>

const StatisticLine = ({text,value}) => {
  return (
    <>
      <p>
        {text} : {value}
      </p>
    </>
  )
}


const Statisitcs = ({good ,neutral , bad , review}) => {
  let average = 0
  if (review.length===0) {
    average = 0
  } else {
    average =  (good - bad) / review.length
  }

  if (review.length === 0) {
    return (
      <>
        <h5>No Feedback given</h5>
      </>
    )
  }
  return (
    <>
     <p>
     all:{bad+good+neutral}
    </p>
     <p>
     average:{average} 
    </p>
     <p>
      postive ={(good /review.length)*100}
    </p>

    </>
  )
}

export default App
