import { useState } from 'react'
import './App.css'
import QuoteFetcher from "./QuoteFetcher"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuoteFetcher/>
    
    </>
  )
}

export default App
