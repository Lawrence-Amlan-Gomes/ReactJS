import { useReducer } from "react"

const initialState = {
    counter2: 0,
    incrementBy2: 3,
    decrementBy2: 2,
    counter3: 0,
    incrementBy3: 5,
    decrementBy3: 4
}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment2":
            return {...state, counter2: state.counter2 + action.value }
        case "decrement2":
            return {...state, counter2: state.counter2 - action.value } 
        case "increment3":
            return {...state, counter3: state.counter3 + action.value }
        case "decrement3":
            return {...state, counter3: state.counter3 - action.value } 
        default:
            return state.counter
    }
}

export default function Counter2(){
    const [Count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <div>Count_2 - {Count.counter2}</div>
            <button type="button" onClick={()=>dispatch({
                type: "increment2",
                value: Count.incrementBy2
            })}>Increment by {Count.incrementBy2}</button>
            <br />
            <button type="button" onClick={()=>dispatch({
                type: "decrement2",
                value: Count.decrementBy2
            })}>Decrement by {Count.decrementBy2}</button>
            <br /><br />

            <div>Count_3 - {Count.counter3}</div>
            <button type="button" onClick={()=>dispatch({
                type: "increment3",
                value: Count.incrementBy3
            })}>Increment by {Count.incrementBy3}</button>
            <br />
            <button type="button" onClick={()=>dispatch({
                type: "decrement3",
                value: Count.decrementBy3
            })}>Decrement by {Count.decrementBy3}</button>
        </div>
    )
}