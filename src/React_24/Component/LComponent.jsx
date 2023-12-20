import useWindowWidth from "../CustomHooks/useWindowWidth";

export default function LcomponentOne(){

    const smallScreen = useWindowWidth(800);
   
    return(
        <div>
            <h1>You are browing on {smallScreen ? "Small" : "Large"} device</h1>
        </div>
    )
}