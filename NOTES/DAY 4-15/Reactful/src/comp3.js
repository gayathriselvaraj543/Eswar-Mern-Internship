import React from 'react'
import Comp4 from './comp4'
const Comp3 = ({msg}) => {
  return (
    <div>
      <h3>I am component 3</h3>
      <Comp4  msg={msg}/>
    </div>
  )
}

export default Comp3

