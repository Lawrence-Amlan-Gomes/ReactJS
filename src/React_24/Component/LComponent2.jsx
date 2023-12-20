import useWindowWidth from "../CustomHooks/useWindowWidth";

export default function LcomponentTwo(){

    const smallScreen = useWindowWidth(700);

    return(
        <div>
            <h1>This is {smallScreen ? "Small" : "Large"} component Two</h1>
        </div>
    )
}