import ClickCounter from "./HOC/ClickCounter"
import HoverCounter from "./HOC/HoverCounter"
import Counter from "./HOC/Counter"
function App() {
  return (
        <div>
          
          <Counter>
                {(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
          </Counter>
          <Counter>
                {(count,incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}
          </Counter>
          
  
        </div>
        
  )
}

export default App
