// /////////////////////// react class component ////////////////////////////////////////////
import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(),locale: "en-US"};   
    }
    tick(){
        this.setState(function (state,props) {
            return{
                date: new Date()
            }
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
    componentDidMount(){
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
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
                    <button id="clockButton" onClick={this.handleClick}>BNG  ENG  CLOCK</button>
                </div>
            </div>
            
        )
    }
}

export default Clock;