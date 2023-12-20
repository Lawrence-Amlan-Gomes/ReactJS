import { useState } from "react"
import { useEffect } from "react"

export default function Mycomponent() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())
    const tick = () =>{
       setDate(new Date())
    }
    const addClick = () => {
        setCount((prevState) => prevState + 1)
    }

    // useEffect is a function and it takes another function in the first parameter 
    //           and and array in the second parameter
    // useEffect will execute the function when ComponentDidMount or ComponentDidUpdate 
    //           and only the change of values of the array
    useEffect(()=>{
        console.log(`Clicked ${count} Times`);
    },[count])

    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ()=>{//went componentWillUnmount then it will return // it is a cleanUp
            clearInterval(interval)
        }
    },[])//by using the blank array this useEffect will run only one time on ComponentDidMount

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    )
}