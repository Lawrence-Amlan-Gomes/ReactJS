import React from "react";

function Button({handleClick, children}){
    return(
        <div>
            <button type="button" onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button);
// React.memo is a Higher Order Component
// it will prevent unneccesary component re-render