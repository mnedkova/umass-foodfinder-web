import { useState } from 'react'
import './App.css'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SearchPage/>
  )
}

export default App
