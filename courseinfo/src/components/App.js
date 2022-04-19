// 1.1 - Reorganize code into three components: Header, Content, and Total
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }
// 1.2 - Refactor Content to render three Part components with each containing the name/exercises of one part
// const Part = (props) => {
//   return (
//     <p>Part: {props.part} | Exercises: {props.exercises}</p>
//   )
// }
const Content = (props) => {
  // return (
  //   <div>
  //     {/* 1.2 Refactor
  //     <p>Part 1: {props.part1} | Number of Exercises: {props.exercises1</p>
  //     <p>Part 2: {props.part2} | Number of Exercises: {props.exercises2}</p>
  //     <p>Part 3: {props.part3} | Number of Exercises: {props.exercises3}</p> */}

  //     {/* 1.3 Refactor
  //     <Part part = {props.part1} exercises = {props.exercises1} />
  //     <Part part = {props.part2} exercises = {props.exercises2} />
  //     <Part part = {props.part3} exercises = {props.exercises3} /> */}
  //   </div>
  // )

  // 1.4 * 1.5 Refactor
  const array = props.course.parts.map((index) => {
    return (
      <div>
        <p>{index.name}: {index.exercises}</p>
      </div>
    )
  })
  return array
}
const Total = (props) => {
  // 1.1 - 1.3
  // return (
  //   <p>Total exercises: {props.exercises}</p>
  // )

  // 1.4 & 1.5 Refactor
  const array = props.course.parts.map((index) => {
    return index.exercises
  })
  .reduce((a, b) => {
    return a + b
  })
  return (
    <div>
      <p>Total exercises: {array}</p>
    </div>)
}

// 1.3 - Modify the App function and refactor to display elements inside App function
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1.name} | {part1.exercises}</p>
//       <p>{part2.name} | {part2.exercises}</p>
//       <p>{part3.name} | {part3.exercises}</p>
//       <p>Total Exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
//     </div>
//   )
// }

// 1.4 - Place objects into arrays and modify the application to display the information
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// 1.5 - Combine it all into one object and fix the application to display the information
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
      <h1>{course.name}</h1>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App