import React from "react";
import BoilingWater from "./BoilingWater";
import TemInput from "./TemInput";
import {convert, toCel, toFar} from "./convert"

export default class Calculator extends React.Component{
    state = {
        temparature: '',
        scale : 'c'
    }
    HandleChange = (e,scale) => {
        this.setState({
            temparature: e.target.value,
            scale: scale
        });
    }
    render(){
        const {temparature, scale} = this.state;
        const celsius = scale == 'f'? convert(temparature,toCel) : temparature
        const fahrenheit = scale == 'c'? convert(temparature,toFar) : temparature
        
        return(
            <div>
                <TemInput scale="c" temparature={celsius} onTemChange={this.HandleChange}/>
                <TemInput scale="f" temparature={fahrenheit} onTemChange={this.HandleChange}/>
                <BoilingWater celsius={parseFloat(temparature)}/>
            </div>
            
        )
    }
}