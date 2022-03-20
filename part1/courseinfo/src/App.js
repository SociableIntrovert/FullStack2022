const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props);
  return (
    <p>{props.name} {props.count}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part 
        name={props.part1.name}
        count={props.part1.exercises}
      />
      <Part 
        name={props.part2.name}
        count={props.part2.exercises}
      />
      <Part 
        name={props.part3.name}
        count={props.part3.exercises}
      />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'

  const part1 = {
    name: 'Fundamentals of React',
    exeercises: 10
  }

  const part2 = {
    name: 'Using props to Pass Data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a Component',
    exercises: 14
  }

  return (
    <div>
      <Header 
        course={course}
      />
      <Content 
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total 
        exercises1={part1.exeercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>  
  )
}

export default App
