import Section from "./Component/Section"
import React from "react"
import Theme from "./Component/Theme"
class App extends React.Component {
      state = {
            theme: ""
      }
      switchThemeDark = () =>{
            this.setState(({theme})=>{
                  if (theme=="dark") {
                        return{theme:"light"}
                  }else{
                        return{theme:"dark"}
                  };
            });
      };
      switchThemeBlue = () =>{
            this.setState(({theme})=>{
                  if (theme=="blue") {
                        return{theme:"light"}
                  }else{
                        return{theme:"blue"}
                  };
            });
      };
      render(){
            const {theme} = this.state
            return (
                  <div>
                        <Theme.Provider value={{theme:theme, switchThemeBlue:this.switchThemeBlue,
                              switchThemeDark:this.switchThemeDark}}>
                              <Section/>
                        </Theme.Provider>
                    
                  </div>
                  
            );
      };
};

export default App
