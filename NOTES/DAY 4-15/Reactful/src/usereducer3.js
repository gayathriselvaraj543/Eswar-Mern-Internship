import React,{useReducer} from 'react'
const ACTIONS={
      INCREMENT:"increment",
      DECREMENT:"decrement",
      ADD10:"adding",
      SUB2:"subtracting",
      RESET:"reset"
}
function reducerfunction(state,action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return{count: state.count+1}
            case ACTIONS.DECREMENT:
                return{count: state.count-1}
                case ACTIONS.ADD10:
                    return{count:state.count+10}
                    case ACTIONS.SUB2:
                        return{count:state.count-2}
                        case ACTIONS.RESET:
                          return{count:0}
    }
  }
 export const Usereducer3 = () => {
   const[state,dispatch] =useReducer(reducerfunction,{count:55})
  function increment(){
    dispatch({type:'increment'})
  }
  function decrement(){
    dispatch({type:'decrement'})
  }
  function adding(){
    dispatch({type:'adding'})
  }
  function subtracting(){
    dispatch({type:'subtracting'})
  }
  function reset()
{
    dispatch({type:'reset'})
}  console.log(state);
  return (
    <div>
       <h1>{state.count}</h1>     
      <button onClick={increment}>Increment +</button>
      <br></br>
      <button onClick={decrement}>Decrement -</button> 
      <br></br>
      <button onClick={adding}> Add 10</button> 
      <br></br>
      <button onClick={subtracting}>Sub 2</button>    
      <br></br>
      <button onClick={reset}>Reset</button> 
      
    </div>
  )
}
