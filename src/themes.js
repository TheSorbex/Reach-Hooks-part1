import React from 'react'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color: 'pink'
  }
}

const ThemeContext = React.createContext(themes.light)

export default ThemeContext
