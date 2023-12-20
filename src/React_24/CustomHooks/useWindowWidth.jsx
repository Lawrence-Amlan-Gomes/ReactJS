import { useEffect, useState } from "react"
const useWindowWidth = (screenSize) => {
    const [smallScreen, setSmallScreen] = useState(false);
    
    useEffect(()=>{
        const checkScreeenSize = () =>{
            setSmallScreen(window.innerWidth < screenSize)
        }
        checkScreeenSize();
        window.addEventListener("resize",checkScreeenSize);
        return () => window.addEventListener("resize",checkScreeenSize);
    },[screenSize])
    return smallScreen;
}

export default useWindowWidth;