const domContainer = document.querySelector("#root")
//////////////////////////// react function component //////////////////////////////////////////

function Clock(){
    return (
        <div id="mainclock">
            {new Date().toLocaleTimeString()}<br></br>
        </div>
    )
}
// /////////////////////// react class component ////////////////////////////////////////////
class Clock1 extends React.Component{
    render(){
        return (
            <div id="mainclock">
                {new Date().toLocaleTimeString(this.props.locale)}<br></br>
            </div>
        )
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(<div>
    <Clock/>
    <Clock1 locale="bn-BD"/>
    <Clock1 locale="en-US"/>
</div>, domContainer)

