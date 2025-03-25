import { useState } from 'react'

import './App.css'
import LightDarkMode from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LightDarkMode/>
    </>
  )
}

export default App
