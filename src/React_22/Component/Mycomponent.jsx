import { useState, useEffect, useRef } from "react"

export default function Mycomponent() {
    const buttonRef = useRef(null)
    const [date, setDate] = useState(new Date())
    const tick = () =>{
       setDate(new Date())
    }
    useEffect(()=>{// useRef as a storage
        buttonRef.current = setInterval(tick,1000)
        // we make the setInterval as a globla function using useRef.current
        return ()=>{
            clearInterval(buttonRef.current)
        }
    },[])

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p><button type="button" onClick={()=>clearInterval(buttonRef.current)}>CleanUP</button></p>
            
        </div>
    )
}