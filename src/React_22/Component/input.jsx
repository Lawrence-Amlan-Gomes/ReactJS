import React from "react"

function Input({type, placeholder}, ref){
    return <input ref={ref} type={type} placeholder={placeholder}/>
}

const forwardrefInput = React.forwardRef(Input)
export default forwardrefInput
// we use forwardRef to take the refference of the element is second parameter