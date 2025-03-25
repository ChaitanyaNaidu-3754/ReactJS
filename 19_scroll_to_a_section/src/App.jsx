import { useState } from 'react'

import './App.css'
import ScrollToSection from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToSection/>
    </>
  )
}

export default App
