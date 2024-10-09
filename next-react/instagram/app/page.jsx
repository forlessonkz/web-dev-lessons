'use client'
import { useState } from "react"
import './home.css'




export default function Home() {
  const [count, setCount] = useState(10)
  const plusFunc = () => {
    setCount(count + 1)
  }

  const minusFunc = () => {
    setCount(count - 1)
  }

  const resetFunc = () => {
    setCount(10)
  }
  return (
    <div className = "home">
      <div className="count-container">
        <p>
          Count: {count}
        </p>
        <button className="plus" onClick = {plusFunc}>
          Plus
        </button>
        <button className="minus" onClick = {minusFunc}>
          Minus
        </button>
        <button className="reset" onClick = {resetFunc}>
          Reset
        </button>
      </div>
    </div>
  );
}
