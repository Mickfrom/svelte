import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './Form.jsx'



function App() {
  const [count, setCount] = useState(0)
  return (

    <>
      <h1>Hello</h1>
      <MyForm/>
    </>
  )
}

export default App
