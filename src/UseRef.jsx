import React, { useRef } from 'react'

const UseRef = () => {

    const ref = useRef(null)

    const change = () => {
        console.log(ref.current.value);
    }
  return (
    <div>
      <input type="text"  ref={ref} onChange={change}/>
    </div>
  )
}

export default UseRef
