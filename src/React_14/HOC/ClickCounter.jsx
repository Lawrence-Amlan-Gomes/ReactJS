import React from "react"
export default function ClickCounter({count, incrementCount}){
        return (
            <div>
                <button type="button" onClick={incrementCount}>
                    <h1>Clicked {count} times</h1>
    
                </button>
            </div>
        )
    }
    

