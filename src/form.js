import React, { useState } from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TfiUppercase } from 'react-icons/tfi';
const Form = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword]=useState('')
    const handleChange = (e) =>{
        setName(e.target.value);
    }
    const handleChange1 = (e) =>{
        setEmail(e.target.value);
    }
    const handleChange2 = (e) =>{
        setPassword(e.target.value);
    }
  return (
    <div>
        <form >
            <label >
                Name:
                <br></br>
                <input type="text" value={name} onChange={handleChange} placeholder='Enter your name'  /> 
                <MdDriveFileRenameOutline size={20} />
                </label>
                <br></br>
                <label>
                Email:
                <br></br>
                <input type ="email" value={email} onChange={handleChange1} placeholder='Enter your mail'/>
                <MdAttachEmail size={20}/>
                </label>
                <br></br>
                <label>
                Password:
                <br></br>
                <input type="password" value={password} onChange={handleChange2} placeholder='Enter Password' />
                <RiLockPasswordFill size={20}/>
                <p>{password.length >8? "Password must be 8 characters long" : ""}</p>
                </label>
        </form>
      <p>Your name is:{name}</p>
      <p>Your email is:{email}</p>
      <p>Password:{password}</p>
    </div>
  )
}
export default Form