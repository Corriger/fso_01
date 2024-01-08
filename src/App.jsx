import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>give feedback</h1>
      <section>
      <button 
        onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button 
        onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
        </section>
      <ul style={{
          fontSize: `16px`,
          fontWeight: `bolder`
        }}>
        <li style={{
          color: `green`,
        }}>{good}</li>
        <li  style={{
          color: `grey`,
        }}>{neutral}</li>
        <li style={{
          color: `red`,
        }}>{bad}</li>
      </ul>
      <h2>statistics</h2>
    </div>
  )
}

export default App