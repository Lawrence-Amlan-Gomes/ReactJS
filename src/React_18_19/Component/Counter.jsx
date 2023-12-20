import { useState } from "react";
function Counter (){
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}<br/>
            <button type="button" onClick={()=>setCount((prevState)=>prevState+1)}>Add 1</button>
            <button type="button" onClick={()=>setCount((prevState)=>prevState+5)}>Add 5</button>
        </div>
    )
}
export default Counter