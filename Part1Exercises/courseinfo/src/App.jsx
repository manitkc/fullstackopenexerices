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
      <Content  part = {parts} />
      <Total  first = {parts[0].noOfExercies} second = {parts[1].noOfExercies} third = {parts[2].noOfExercies}/>
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
const Part = (prop) => {
  console.log("hi from parts")
  return (
    <div>
          {prop.name} -
          {prop.exerciesNo}
    </div>
  )
}

const Content = ({part}) => {
  console.log(part.name)
  return (
  <>
    <ul>
      <li>
        <Part name = {part[0].name} exerciesNo = {part[0].noOfExercies}/>
      </li>
      <li>
        <Part name = {part[1].name} exerciesNo = {part[1].noOfExercies}/>
      </li>
      <li>
        <Part name = {part[2].name} exerciesNo = {part[2].noOfExercies}/>
      </li>
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