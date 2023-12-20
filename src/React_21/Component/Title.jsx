import React from "react";
function Title() {
    return <h2>UseCallback Hook tutorial</h2>
    
}
export default React.memo(Title);
// React.memo is a Higher Order Component
// it will prevent unneccesary component re-render