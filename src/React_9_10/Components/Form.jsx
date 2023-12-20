import React from "react";

class Form extends React.Component{
    state={
        title: "JavaScript",
        text: "JavaScript is awesome",
        library: "React",
        checkedbox: false
    }
    HandleChange = (e) => {
        if (e.target.type == "text"){
            this.setState(
                {
                    title: e.target.value
                }
            )
        }else if (e.target.type == "textarea") {
            this.setState(
                {
                    text: e.target.value
                }
            )
        }else if (e.target.type == "select-one") {
            this.setState(
                {
                    library: e.target.value
                }
            )
        }
        else if (e.target.type == "checkbox") {
            this.setState(
                {
                    checkedbox: e.target.checked
                }
            )
        }else{
            console.log("Nothing here")
        }
            
        
        
    }
    HandleSubmit = (e) =>{
        const {title, text, library, checkedbox} = this.state
        e.preventDefault();
        console.log(title,text,library,checkedbox)
    }
    render(){
        const {title, text, library, checkedbox} = this.state
        return(
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <input className="input1" type="text" placeholder="Write Something"
                    value={title} onChange={this.HandleChange}/>
                
                    <textarea name="text" className="input1"
                    value={text} onChange={this.HandleChange}/>

                    <select value={library}className="input1" onChange={this.HandleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Anglar</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <input type="checkbox" checked={checkedbox} className="input1" onChange={this.HandleChange}/>
                    <input type="submit" value="Submit" className="input1"/>

    
                    
                </form>
            </div>
        )
    }
}


export default Form;