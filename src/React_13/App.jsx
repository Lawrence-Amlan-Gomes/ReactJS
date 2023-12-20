import ClickCounter from "./HOC/ClickCounter"
import HoverCounter from "./HOC/HoverCounter"

// We avoid Props Drilling Problem by using Higher Order Component But Can't Solve it

function App() {
  return (
        <div>
          <ClickCounter/>
          <HoverCounter/>
  
        </div>
        
  )
}

export default App
