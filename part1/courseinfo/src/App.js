const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.count}</p>
  )
}

const Content = (props) => {
  //const splitParts = props.parts.map(partObj => "name='" + partObj.name + "' count=" + partObj.exercises);
  //console.log(splitParts);
  return (
    <>
      <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} count={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  let totalExercises = 0;
  props.parts.forEach(part => {
    totalExercises += part.exercises;
  });
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack Application Development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to Pass Data',
      exercises: 7
    },
    {
      name: 'State of a Component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header 
        course={course}
      />
      <Content 
        parts={parts}
      />
      <Total 
        parts={parts}
      />
    </div>  
  )
}

export default App
