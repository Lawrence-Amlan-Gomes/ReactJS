import React from "react";
import Clock from "./Clock";

function ClockList({q=[]}) {
    return(
        <div>
            {q.map(()=><Clock key={Math.random()}/>)}
        </div>
    )
}

export default ClockList;