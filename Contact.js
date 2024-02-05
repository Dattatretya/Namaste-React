import React, { useState } from 'react'

const Contact = () => {

  let [count, setCount] = useState (0)

  return (
    <div>
      <h3>Count 1: {count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count increase</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>Count decrease</button>
    </div>
  )
}

export default Contact