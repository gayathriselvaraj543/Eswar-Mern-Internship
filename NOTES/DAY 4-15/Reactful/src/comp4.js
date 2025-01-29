import React from 'react'
import Comp5 from './comp5'
const Comp4 = ({msg}) => {
  return (
    <div>
      <h4>I am component 4</h4>
      <Comp5  msg={msg}/>
    </div>
  )
}

export default Comp4
