import React, { useState } from 'react'
const Formtoredux = () => {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
function handleChange(e){
   const{value,type} =e.target;
   if(type=='text'){
    setName(value)
   }
   else{
    setAge(value)
   }
   
   
   
}
console.log(name)
   console.log(age)
  return (
    <div>
      <label>NAME:</label>
      <input type='text' value={name} onChange={handleChange}></input>
      <h1>{name}</h1>
      <label>AGE:</label>
      <input type='number' value={age} onChange={handleChange}></input>
      <h1>{age}</h1>
    </div>
  )
}
export default Formtoredux
