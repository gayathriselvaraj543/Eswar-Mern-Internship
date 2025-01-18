import React,{useState,useEffect} from 'react'
const Timer = () => {
     const[seconds,setSeconds]=useState(0);
     useEffect(() => {
        const interval=setInterval(() =>{
            setSeconds(prevSeconds => prevSeconds+2);
        },500);
     return () =>clearInterval(interval);  
},[]);
  return (
    <div>
      <h1>Timer:</h1>
      <p>{seconds} seconds have passed</p>
    </div>
  )
}

export default Timer
