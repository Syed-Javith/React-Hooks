import React, { useContext, useState } from 'react'

const UseState = () => {
    const [count , setCount] = useState(0);

    const user = useContext()
  return (
    <>
    <div>
      { count }
    </div>
    <button onClick={() => setCount(count+1)}>Add</button>
    <button onClick={() => setCount(count-1)}>Subtract</button>
    </>
  )
}

export default UseState
