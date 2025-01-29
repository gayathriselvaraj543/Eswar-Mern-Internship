import React from 'react'
import { useSelector } from 'react-redux'
const Users = () => {
    const users=useSelector((state)=>state.userinfo.users);
    console.log(users)
    
  return (
    <div>
     <section className='Users'>
      <img src='https://th.bing.com/th/id/OIP.zmCcWMetws0h2HTH0o0baQHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
      </section>
    </div>
  )
}
export default Users
