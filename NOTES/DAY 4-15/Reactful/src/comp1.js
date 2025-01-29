import React from 'react'
import Comp2 from './comp2'
const Comp1 = () => {
    var msg="hello from component 1"
    console.log(msg);
  return (
    <div>
      <h1>I am component 1</h1>
      <h1>{msg}</h1>
      <Comp2  msg={msg}  />
     
    </div>
  )
}

export default Comp1
