import React from 'react'
import Comp3 from './comp3'
const Comp2 = ({msg}) => {
  return (
    <div>
      <h2>I am component 2</h2>
      <Comp3  msg={msg}/>
    </div>
  )
}

export default Comp2
