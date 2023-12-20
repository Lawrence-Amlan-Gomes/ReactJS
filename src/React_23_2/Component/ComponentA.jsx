import ComponentB from "./ComponentB"
// useReducer used in state management
// it takes a function in the first parameter and initial state value in the second parameter
// the ruducer function takes currentState in the first parameter and Action in second parameter 
//             and return a tuple [ newState, dispatch]
// newState is a new State and dispatch is another function which uses to change the state value

// example of action is 

export default function ComponentA(){
    return(
        <div>
            <p>Component A</p>
            <ComponentB/>
        </div>
    )
}