import React from "react";
function ShowCount ({count, title}){
    
    return(
        <div>
            {title} is {count}
        </div>
    )

}
export default React.memo(ShowCount) 
// React.memo is a Higher Order Component
// it will prevent unneccesary component re-render