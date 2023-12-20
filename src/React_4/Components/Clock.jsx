// /////////////////////// react class component ////////////////////////////////////////////
import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date()};   
    }
    tick(){
        this.setState(function (state,props) {
            return{
                date: new Date()
            }
        })}

    componentDidMount(){
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    render(){
        return (
            <div id="mainclock">
                {new Date().toLocaleTimeString(this.props.locale)}<br></br>
            </div>
        )
    }
}

export default Clock;