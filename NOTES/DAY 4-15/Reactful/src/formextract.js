import React, { useState } from 'react'

const Formextract = () => {
    const[name,updateName]=useState(' ');
   
    function handleChange(e){
        updateName(e.target.value)
    }
   
  return (
    <div>
        <form>
      <label>name </label>
        <input type='text' value={name} onChange={handleChange}></input>
      <h1>YOUR NAME IS :{name}</h1>
      </form>
    </div>
  )
}

export default Formextract
