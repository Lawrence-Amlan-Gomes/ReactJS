// /////////////////////// react class component ////////////////////////////////////////////
import React from "react";
import Button from "./Button";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(),locale: "en-US"};   
    }
    tick(){
        this.setState({
            date: new Date()
        })}
    handleClick = () => {
        if (this.state.locale == "en-US"){
            this.setState({
                locale: "bn-BD"
            })
        }
        if (this.state.locale == "bn-BD"){
            this.setState({
                locale: "en-US"
            })
        }
        
    }
    componentDidMount(){ // it will run after the DOM fully loaded
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){// When the react single page app will change this function will stop the clock
        clearInterval(this.clockTimer);
    }
    render(){
        const { date, locale} = this.state;
        return (
            <div>
                <div id="mainclock">
                {date.toLocaleTimeString(locale)}<br></br>
                </div>
                <div>
                    <Button change={this.handleClick} local={locale}/>
                </div>
            </div>
            
        )
    }
}

export default Clock;