import Content from "./Content"
import Theme from "./Theme"
export default function Section() {
    return(
        <div>
            <h1>This is Section</h1>
            <Theme.Consumer>
                {({theme2})=><Content themeContent={theme2}/>}   
            </Theme.Consumer>
        </div>
    )
}