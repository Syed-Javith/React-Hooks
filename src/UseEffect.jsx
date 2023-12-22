import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("count changed");
    },[count])
  return (
    <div>
      <div>
        { count }
      </div>
      <button onClick={() => setCount(count+1)}>Add</button>
    <button onClick={() => setCount(count-1)}>Subtract</button>
    </div>
  )
}

export default UseEffect
