import { useReducer } from "react"

// this is for local variable

const initialState1 = 20
const initialState2 = 10
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
    // using double useReducer Hook So we can use only one reducer function
    const [Count1, dispatch1] = useReducer(reducer, initialState1);
    const [Count2, dispatch2] = useReducer(reducer, initialState2);
    return(
        <div>
            <div>Counter_4 - {Count1}</div>
            <button type="button" onClick={()=>dispatch1("increment")}>Increment by 1</button>
            <br />
            <button type="button" onClick={()=>dispatch1("decrement")}>Decrement by 1</button>
            <br /><br />
            <div>Counter_5 - {Count2}</div>
            <button type="button" onClick={()=>dispatch2("increment")}>Increment by 1</button>
            <br />
            <button type="button" onClick={()=>dispatch2("decrement")}>Decrement by 1</button>
        </div>
    )
}