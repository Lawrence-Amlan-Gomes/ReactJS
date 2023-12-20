import { useReducer } from "react"

// useReducer used in state management
// it takes a function in the first parameter and initial state value in the second parameter
// the ruducer function takes currentState in the first parameter and Action in second parameter 
//             and return a tuple [ newState, dispatch]
// newState is a new State and dispatch is another function which uses to change the state value

// example of action is 
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1 
        default:
            return state
    }
}

export default function Counter(){
    const [Count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div>Counter_1 - {Count}</div>
            <button type="button" onClick={()=>dispatch("increment")}>Increment by 1</button>
            <br />
            <button type="button" onClick={()=>dispatch("decrement")}>Decrement by 1</button>
        </div>
    )
}