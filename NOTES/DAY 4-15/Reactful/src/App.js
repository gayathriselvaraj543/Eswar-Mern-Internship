/*
import logo from './logo.svg';
import './App.css';
import Comp1 from './comp1';
function App() {
  return (
    <div className="App">
      <Comp1/>
    </div>
  );
}

export default App;
*/
/*
import React ,{useState,createContext} from 'react'
import Container from './container'
import Users from './users'
import './App.css';
 export const themeContext =createContext();
const App = () => {
  const[Theme,setTheme]=useState("light")
  const [style,setStyle] = useState({backgroundColor:'lightblue'})
  const ToggleTheme =()=>{
    setTheme((theme)=>(theme==="light"?"dark":"light"))
  } 
  const togglecolor=()=>{
    setStyle(prevStyle=>({...prevStyle,backgroundColor:prevStyle.backgroundColor==='green'?'lightblue':'lightgreen',color:prevStyle.color==='black'?'white':'black'}))
  }
 
  return (
    <div className='App'>
      <h1 style={style} >App Component</h1>
      <themeContext.Provider value={{Theme,style}}>
      <h1>Theme:{Theme}</h1>
      <button onClick={ToggleTheme} > change theme</button>
      <button onClick={togglecolor}>change color</button>


      <Container Theme={{Theme,style}}/>
      </themeContext.Provider>
    </div>
  )
}
export default App
*/
/*import React,{useState,useReducer} from 'react'
import { Usereducer4 } from './usereducer4'
const App = () => {
  return (
    <div>
      <Usereducer4/>
    </div>
  )
}

export default App
*/
/*
import React from 'react'
import './style.css';
import Stylecomponent from './stylecomponent';
const App = () => {
  return (
    <div>
    <div className='Style'>  
      <h1>MY APP</h1>
      <h2>Second line</h2>   
      </div>
    <div className='Style'>
      <h1>MY APP</h1>
      <h2>Second line</h2>
</div>
<div className='Style'>
      <p>Style Component</p>
      </div>
      <Stylecomponent/>
    </div>
  )
}

export default App
*/
import React from 'react'
import Reduxintro2 from './reduxintro2'
const App = () => {
  return (
    <div>
      <Reduxintro2 />
    </div>
  )
}
export default App   
