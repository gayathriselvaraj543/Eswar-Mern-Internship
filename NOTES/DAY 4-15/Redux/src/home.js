import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { useReducer } from 'react'
import { addUser } from './slices/userslice'
const Home = () => {
    const dispatch =useDispatch()
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    function handleChange(event) {
        const { name, value } = event.target;
        setName((curr) => {
          return {
            ...curr,
            [name]: value
          };
        });
      }
console.log(name);
const add =(e)=>{
    e.preventDefault();
 dispatch(addUser(name));
}

  return (
    <div className='TEXT'>
        <section className='Home'>
           
        <img 
  src='https://wallpaperaccess.com/full/6810534.jpg' 
  alt='Home' 
  style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
/>
      <h1>HOME PAGE</h1>
      <br></br>
      <label>Name</label>
      <input type='text' value={name.name} onChange={handleChange}></input>
      <br></br>
      <br></br>

      <label>Age</label>
      <input type='number' value={age.age} onChange={handleChange}></input>
      <br />
      <button onClick={add} >ADD</button>

      </section>
    </div>
  )
}

export default Home
