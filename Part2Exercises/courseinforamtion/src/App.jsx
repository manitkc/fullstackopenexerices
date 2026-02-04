const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course = {course}/>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name = {course.name}/>
      <Content content = {course.parts}/>
      <Total partsArray = {course.parts}/>
    </>
  )
}

const Header = ({name}) => <h1>{[name]}</h1>

const Content = ({content}) => {


  return (
    <>
    {content.map((part) => 
      <Part key = {part.id}  name = {part.name} exercisesNo = {part.exercises}/>
    )}
    </>
  )
}
const Part = ({name ,exercisesNo }) => {
  console.log("hi from part ")
  return (
    <div>{name} {exercisesNo}</div>
  )
}

const Total = ({partsArray}) => {
  let sum = 0
  partsArray.forEach((part) => {
    sum += part.exercises
  })
  return (
    <>
    <p> <strong>total of {sum} exercises</strong></p>
    </>
  )
}


export default App