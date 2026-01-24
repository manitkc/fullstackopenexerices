const App = () => {
  console.log("hi")
  const course = {
    name :'Half Stack application development' ,
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  } 

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}
const Header = (prop) => {
  return (
    <>
    <h1>
      {prop.course}
    </h1>
    
    </>
  )

}
const Content = (prop) => {
  const content = prop.parts.map((value) => 
    <li>
      {value.name}-{value.exercises}
    </li>
  )
  return (
    <>
    <ul>
      {content}
    </ul>
    </>
  )

}
const Total = (prop) => {
  const total = prop.parts[0].exercises +prop.parts[1].exercises +prop.parts[2].exercises
  return (
    <>
    <p>
      Total = {prop.parts[0].exercises} + {prop.parts[1].exercises}+ {prop.parts[2].exercises} = {total}
    </p>
    </>
  )

}

export default App
