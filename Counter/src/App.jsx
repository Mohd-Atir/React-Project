import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  const addValue = () => {
    if(count != 20){
      setCount(count + 1)
    }else{
      alert("You can't add value more than 20 !!");
    }
  }

  const removeValue = () => {
    if(count != 0){
      setCount(count - 1)
    }else{
      alert("Negative values are not allowed !!");
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <p>My first counter application by react |{count}|</p>
      <div className="card">
        <button onClick={addValue}>Add Value</button>
        <span>{count}</span>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  )
}

export default App