import React, { useContext } from 'react'
import authContext from './AuthContext'

const AnotherChild = () => {
    const user = useContext(authContext);
  return (
    <div>
     Name :  { user.user?.name }

     <br />
     
     Email : { user.user?.email }
    </div>
  )
}

export default AnotherChild
