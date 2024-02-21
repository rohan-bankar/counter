import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const add = ()=>{
    if(counter < 20){
      setCounter(counter + 1);
    }else{
      alert("No more addition allowed")
    }
  }

  const remove = ()=>{
    if(counter <= 0){
      alert("count must be greater then 0")
    }else{
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>Number Counter</h1>
      <h2>{counter}</h2>
      <button
      onClick={add}
      >Add Number</button>
      <br />
      <br />
      <button
      onClick={remove}
      >Remove Number</button>
    </>
  )
}

export default App
