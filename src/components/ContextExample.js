import React, { useContext } from 'react'
import ThemeContext from '../themes'
function ContextExample () {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div>
      <p style={theme}>123</p>
    </div>
  )
}

export default ContextExample
