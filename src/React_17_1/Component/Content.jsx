import Hover from "./Hover"
import Theme from "./Theme"
import React from "react"
export default function Content(){
        return(
            <div>
                <h1>This is Content</h1>
                <Theme.Consumer>
                    {({theme,switchThemeDark,switchThemeBlue})=>(
                        <Hover themeHover={theme} switchThemeDark={switchThemeDark}
                        switchThemeBlue={switchThemeBlue}/>
                    )}
                </Theme.Consumer>
            </div>
        )
}
