import React from "react";

class Button extends React.Component{
    render = () =>{
        const {change, local} = this.props;
        let localeButton;
        if (local == 'en-US') {
            localeButton = <button id="clockButton" onClick={change}>Switch To BD Clock</button>
        }
        else{
            localeButton = <button id="clockButton" onClick={change}>Switch To US Clock</button>
        }
        return (
            <div>
                <div>
                    {localeButton}
                </div>
            </div>
            
        )
    }
}

export default Button;