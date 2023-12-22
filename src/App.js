import { useState } from 'react';
import './App.css';
import authContext from './AuthContext';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseState from './UseState';
import Child from './Child';
import AnotherChild from './AnotherChild';

function App() {

  const [user,setUser] = useState(null); 

  return (
     <authContext.Provider value={{user , setUser} }>
      <div className="App">
      {/* <UseState />
      <UseEffect />
      <UseRef /> */}
      <Child/>
      <AnotherChild />
      </div>
     </authContext.Provider>
  );
}

export default App;
