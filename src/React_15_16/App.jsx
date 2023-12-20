import Section from "./Components/Section"
import React from "react"
import Theme from "./Components/Theme"
class App extends React.Component {
      state = {
            theme1: "dark",
            theme2: "blue"
      }
      render(){
            const {theme1,theme2} = this.state
            return (
                  <div>
                        {/* raping the root component Section of Hover component whit Theme.Provider 
                        for giving the value of theme as an object */}
                        <Theme.Provider value={{theme1: theme1, theme2: theme2}}>
                              <Section/>
                        </Theme.Provider>
                    
                  </div>
                  
            )
      }
}

export default App
