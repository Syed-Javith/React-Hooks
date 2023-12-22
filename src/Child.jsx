import React, { useContext, useRef } from 'react'
import authContext from './AuthContext'

const Child = () => {
    const user = useContext(authContext);
    const ref = useRef(null);

    const changeUser = () => {
        user.setUser({ name : ref.current.name.value , email :  ref.current.email.value})
    }
  return (
    <div>
        <form onChange={() => changeUser()} ref={ref}>
            <input type="text" name="name" id="name" />
            <input type="email" name="email" id="email" />
        </form>
      {/* <button onClick={() => user.setUser("Syed Javith")}>Change</button> */}
    </div>
  )
}

export default Child
