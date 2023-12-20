import Hover from "./Hover"
import Theme from "./Theme"
export default function Content({themeContent}) {
    let style;
    if (themeContent == "dark"){
        style = {backgroundColor: '#000000', color:'#ffffff'}
    }else if ( themeContent == "blue"){
        style = {backgroundColor: '#001181', color:'#ffffff'}
    }else{
        style = null
    }
    return(
        <div>
            <h1 style={style}>This is Content</h1>
            {/* Here we are giving the value of theme using an anonymous fucntion to Hover Component 
            raping with Theme.Consumer */}
            <Theme.Consumer>
                {({theme1})=><Hover themeHover={theme1}/>}   
            </Theme.Consumer>
            
        </div>
    )
}