import { useReducer, useEffect } from "react"

const initialState = {
    post: {},
    loading: true,
    erroe: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case "success":
            return {
                loading: false,
                post: action.data,
                error: ''
            }
        case "failure":
            return {
                loading: false,
                post: {},
                error: 'There was an error'
            }
        default:
            return state
    }
}

export default function GetPost2(){
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data)=>{
            dispatch({type: "success", data:data})
        })
        .catch(()=>{
            dispatch({type: "failure"})
        })
    },[])

    return(
        <div className="app">  
            {state.loading ? "Loading..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}