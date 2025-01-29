import React,{useContext} from 'react'
import { themeContext } from './App'

  const User =({Theme,style}) =>{const 
    contextValue = useContext(themeContext)
   console.log(contextValue);
   
  return (
    <div style={contextValue.style}>
      <h1>User</h1>

    </div>
  )
  }

export default User
