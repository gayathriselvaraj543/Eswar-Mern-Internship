import React, {useState} from "react";
 export const Message =() =>{
    const[message,setMessage] = useState('Click the button to see a message ');

    const handleClick =() =>{
        setMessage('Hello,you clicked the button');
        
    };
    const handleClicks =() =>{
        setMessage('Hi')
    }
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleClicks}>Clikck here</button>
        </div>
    )
}