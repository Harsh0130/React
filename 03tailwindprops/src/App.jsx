import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username: "Harsh",
    age: 21
  }

  let newArrr =[1,2,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Anisha" btnText = "Clickme"/>
      <Card username="Harsh" />
    </>
  )
}

export default App
