export default function Hover({themeHover, switchThemeDark, switchThemeBlue}) {
    let style;
    if (themeHover == "dark"){
        style = {backgroundColor: '#000000', color:'#ffffff'}
    }else if ( themeHover == "blue"){
        style = {backgroundColor: '#001181', color:'#ffffff'}
    }else{
        style = null
    }
    return(
        <div>
            <h1 style={style}>This is Hover</h1>
            <button type="button" onClick={switchThemeDark}>Change Theme Dark</button>
            <button type="button" onClick={switchThemeBlue}>Change Theme Blue</button>
        </div>
    )
}