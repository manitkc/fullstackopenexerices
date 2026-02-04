const App = () => {
  const name = "Web development curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ] // end of array
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
        <h1>{name}</h1>
        {courses.map((course) => 
          <Courses key={course.id} name={course.name} parts = {course.parts}/>
        )}
    </div>
  )
}

const Courses = ({name , parts}) => {
  const IntialValue = 0
  const Total = parts.reduce((sum , part) => {
    console.log(part.exercises)
    return sum + part.exercises 
  }, IntialValue)
  console.log(Total)

  return (
    <>
      <h3>{name}</h3>
      {parts.map((part)=>
        <Part key={part.id} exerciseName = {part.name} exerciseNo = {part.exercises}/>
      )}
      <p><strong>total of {Total} exercises</strong></p>
    </>
  )
}

const Part = ({exerciseName,exerciseNo}) => {
  return (
    <>
    <p>{exerciseName} {exerciseNo}</p>
    </>
  )
}

const Total = ({}) => {

}


export default App