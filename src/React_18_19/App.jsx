import Tudo from "./Component/Tudu";
import Counter from "./Component/Counter";
import React from "react"
class App extends React.Component {
      render(){
            return (
                  <div className="app">
                        <Tudo/>
                        <Counter/>    
                  </div>
                  
            );
      };
};

export default App
