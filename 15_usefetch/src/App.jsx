import { useState } from 'react'

import './App.css'
import UseFetchHookTest from './components/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseFetchHookTest/>
    </>
  )
}

export default App
