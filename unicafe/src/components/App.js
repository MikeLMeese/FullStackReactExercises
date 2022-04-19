// 1.6 - Code application to display total number of collected feedback
import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback!</h1>
//       <button onClick = {() => setGood(good + 1)}>Good</button>
//       <button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick = {() => setBad(bad + 1)}>Bad</button>
//       <h1>Statistics</h1>
//       <p>Good: {good}<br />
//       Neutral: {neutral}<br />
//       Bad: {bad}<br />
//       {/*1.7 - Expand application to show more statistics*/}
//       All: {good + neutral + bad}<br />
//       Average: {(good - bad) / (good + neutral + bad)}<br />
//       Positive Average: {(good / (good + neutral + bad))*100} %</p>
//     </div>
//   )
// }

// 1.8 - Refactor application so that all statistics are in their own component
// a proper place to define a component
// const Statistics = (props) => {
//   return (
//     <div>
//       <h1>Statistics</h1>
//       <p>Good: {props.good}<br />
//       Neutral: {props.neutral}<br />
//       Bad: {props.bad}<br />
//       Total: {props.total}<br />
//       Average: {props.average}<br />
//       Positive Average: {props.positive} %</p>
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback!</h1>
//       <button onClick = {() => setGood(good + 1)}>Good</button>
//       <button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick = {() => setBad(bad + 1)}>Bad</button>
//       <Statistics 
//       good = {good}
//       neutral = {neutral}
//       bad = {bad}
//       total = {good + neutral + bad}
//       average = {((good - bad) / (good + neutral + bad))}
//       positive = {(good / (good + neutral + bad))*100}/>
//     </div>
//   )
// }

// 1.9 - Change application to display statistics only when feedback is gathered
// const Statistics = (props) => {
//   if (props.total === 0) {
//     return (
//       <div>
//         <h1>No feedback given yet!</h1>
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <h1>Statistics</h1>
//         <p>Good: {props.good}<br />
//         Neutral: {props.neutral}<br />
//         Bad: {props.bad}<br />
//         Total: {props.total}<br />
//         Average: {props.average}<br />
//         Positive Average: {props.positive} %</p>
//       </div>
//     )
//   }
// }

// 1.10 - Extract button and StatisticLine and refactor the application
const Button = (props) => {
  return <button onClick = {(props.handleClick)}>
    {props.text}
  </button>
}
const StatisticLine = ({text, value}) => {
  return (
    // <div>
    //   {text}: {value}
    // </div>

    /*1.11 - Refactor */
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>No feedback given yet!</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        {/*1.11 - Display the statistics in an HTML table*/}
        <table>
          <tbody>
          <StatisticLine text = "Good" value = {props.good} />
        <StatisticLine text = "Neutral" value = {props.neutral} />
        <StatisticLine text = "Bad" value = {props.bad} />
        <StatisticLine text = "Total" value = {props.total} />
        <StatisticLine text = "Average" value = {props.average} />
        <StatisticLine text = "Positive Average" value = {props.positive + " %"} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick = {() => setGood(good + 1)} text="Good" />
      <Button handleClick = {() => setNeutral(neutral + 1)} text = "Neutral" />
      <Button handleClick = {() => setBad(bad + 1)} text = "Bad" />
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {good + neutral + bad}
      average = {((good - bad) / (good + neutral + bad))}
      positive = {(good / (good + neutral + bad))*100}/>
    </div>
  )
}

export default App