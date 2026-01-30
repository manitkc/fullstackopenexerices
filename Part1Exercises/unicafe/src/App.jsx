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
    <StatisitcsInfo good={good} neutral={neutral} bad={bad} review ={review}/>
    </>
  )
}

const Header = () => <h2>give feedback</h2>

const Button = ({onClick,text}) => <button onClick = {onClick}> {text} </button>

const StatisticsHeader = () => <h2>Statistics</h2>

const StatisitcsInfo = ({good ,neutral , bad , review}) => {
  let average = 0
  if (review.length===0) {
    average = 0
  } else {
    average =  (good - bad) / review.length
  }
  return (
    <>
    <p>
     good:{good}
    </p>
    <p>
     neutral:{neutral}
    </p>
    <p>
     bad:{bad}
    </p>
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
