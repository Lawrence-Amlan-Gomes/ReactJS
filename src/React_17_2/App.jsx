import Section from "./Component/Section"
import React from "react"
import Theme from "./Component/Theme"
class App extends React.Component {
      state = {
            theme: "light",
            switchTheme: () =>{
                  this.setState(({theme})=>{
                        if (theme=="dark") {
                              return{theme:"light"}
                        }else{
                              return{theme:"dark"}
                        };
                  });
            }
      }
      
      render(){
            return (
                  <div>
                        <Theme.Provider value={this.state}>
                              <Section/>
                        </Theme.Provider>
                    
                  </div>
                  
            );
      };
};

export default App
