import { useState } from 'react'

import './App.css'
import UseWindowResizeTest from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseWindowResizeTest/>
    </>
  )
}

export default App
