import React from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
  }

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
    

  )
}

const Part = (props) => {
  return (
    <p>{props.part.name}{props.part.exercises}</p>
  )
}
const Total = (props) => {
  return (
      <p>{props.Course.parts.reduce((a,v) => a = a + v.exercises , 0) }</p>)
  
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    <Content course={parts} />
    <Total course={parts} />
    </div>
  )
}

export default App