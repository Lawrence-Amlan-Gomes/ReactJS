import { useEffect, useRef } from "react"
import Input from "./input";

// When we badly need to change the value of DOM then we use useRef Hook

export default function Form(){

    const inputRef = useRef(null);
    // Create a null refference 

    useEffect(()=>{
        inputRef.current.focus();
    },[])

   

    return(
        <div>
            <p>
                {/* here we connect the elements with the created refference in (useRefName.current)*/}
                <Input ref={inputRef} type="text" placeholder="enter something"/>
            </p>
        </div>
    )
}