import counterContext from "./ReactContext";
import { useContext } from "react"
export default function ComponentB(){
    const countContext = useContext(counterContext);
    return(
        <div>
            <div>Component B</div>
            <button type="button" onClick={()=>countContext.countDispatch("increment")}>Increment by 1</button>
            <br />
            <button type="button" onClick={()=>countContext.countDispatch("decrement")}>Decrement by 1</button>
        </div>
    )
}