import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <h1 className='text-2xl text-amber-400 font-bold text-center mt-10'>
    Hello
    </h1>
  )
}

export default App
