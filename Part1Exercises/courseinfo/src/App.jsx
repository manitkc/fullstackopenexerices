const App = () => {
  console.log("hello from app ")
  const course = 'Half Stack application development'

  const parts = [
    {name : "Fundamentals of React" ,
      noOfExercies: 10
    },
    {name : "Using props to pass data" ,
      noOfExercies: 7
    },
    {name : "State of a component" ,
      noOfExercies: 14
    }
  ]

  return (
    <>
      <Header title = {course} />
      <Content  part = {parts[0]} />
      <Content  part = {parts[1]} />
      <Content  part = {parts[2]} />
      <Total    first = {parts[0].noOfExercies} second = {parts[1].noOfExercies} third = {parts[2].noOfExercies}/>
    </>
    
  )
}

const Header = (prop) => {
  console.log("hi from header")
  return (
    <>
      <h1>
        Title : {prop.title}
      </h1>

    </>
  )

}

const Content = ({part}) => {
  console.log(part.name)
  return (
  <>
    <ul>
      <li>
         name = {part.name}
      </li>
      number of exercies = {part.noOfExercies} 
    </ul>
  </>
  )

} 
const Total = (prop) => {
  console.log("hi from total")
  return (
    <>
      <p> total number of exercies = {prop.first} + {prop.second} + {prop.third}  = {prop.first + prop.second + prop.third} </p>
    </>
  )
} 

export default App