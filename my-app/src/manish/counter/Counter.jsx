import React,{useState} from 'react'

const Counter = () => {
  const[count,setCount]=useState(0);
  const add = () => {
    setCount(count + 1);
  }
  const sub =() => {
    if(count>0){

      setCount(count - 1);
    }
  }
  const reset =() => {
    setCount(0);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
      <button onClick={reset}>Reset</button>
      </div>
  )
}

export default Counter