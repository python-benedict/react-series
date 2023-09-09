import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch (action) {
        case 'increament':
            return state + 1
            break;
        case 'decreament':
            return state - 1
            break;
        case 'reset':
            return initialState
            break;
    
        default:
            break;
    }
}
function UseReducerOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> dispatch('increament')}>Increament</button>
        <button onClick={()=> dispatch('decreament')}>Decreament</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerOne