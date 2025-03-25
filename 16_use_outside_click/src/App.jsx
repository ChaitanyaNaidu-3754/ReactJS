import { useState } from 'react'

import './App.css'
import UseOnclickOutsideTest from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseOnclickOutsideTest/>
    </>
  )
}

export default App
