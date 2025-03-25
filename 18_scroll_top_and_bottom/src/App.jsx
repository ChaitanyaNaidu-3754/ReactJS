import { useState } from 'react'

import './App.css'
import ScrollToTopAndBottom from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTopAndBottom/>
    </>
  )
}

export default App
