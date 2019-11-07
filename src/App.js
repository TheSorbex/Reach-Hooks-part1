import React, { useState } from 'react'
import EffectExample from './components/EffectExample'
import Wrapper from './components/Wrapper'
import ThemeContext from './themes'

function App () {
  const [ count, setCount ] = useState(0)
  const [ array, setArray ] = useState([])
  const [ showEffectExample, setShowEffectExample ] = useState(false)
  return (
    <ThemeContext.Provider value={{ color: 'green' }}>
      <div className='App'>
        <p>Counter: {count}</p>
        <p>Array: {array.map((elem) => elem)}</p>
        <button onClick={() => {
          setCount(count + 1)
        }}>
      Increase counter
        </button>
        <button onClick={() => {
          array.push(count)
          setArray(array) //  not call rerender
        }}>
      Add elem without copy
        </button>
        <button onClick={() => {
          const newArray = [...array]
          newArray.push(count)
          setArray(newArray)
        }}>
      Add elem with copy
        </button>
        <button onClick={() => {
          setShowEffectExample(!showEffectExample)
        }}>Hide Effect Example</button>
        {showEffectExample && <EffectExample count={count} setCount={setCount} />}
        {/* <Wrapper /> */}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
