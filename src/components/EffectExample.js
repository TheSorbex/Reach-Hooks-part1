import React, { useState, useEffect } from 'react'
const EffectExample = (props) => {
  const [ count, setCount ] = useState(0)
  const [ planets, setPlanets ] = useState([])
//   useEffect(() => {
//     let number = props.count
//     if (count < 0) {
//       setCount(0)
//     }
//     let timeout = setInterval(() => {
//       props.setCount(++number)
//     }, 1000)
//     return () => {
//       clearInterval(timeout)
//     }
//   }, [count])

//   useEffect(() => {
//     console.log(count)
//     window.fetch('https://swapi.co/api/planets/').then((res) => {
//       res.json().then((data) => {
//         setPlanets(data.results)
//       })
//     })
//   }, [])
  return (
    <div>
      <h1>EffectExample</h1>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrement</button>
      <div>
        <h1>Planets</h1>
        {planets.map((planet) => {
          return <p key={planet.name}>{planet.name}</p>
        })}
      </div>
    </div>
  )
}

export default EffectExample
