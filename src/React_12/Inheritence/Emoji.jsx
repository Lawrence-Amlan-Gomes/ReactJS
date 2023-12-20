// Inheritence is not a good practice in React //
import React from "react";

export default class Emoji extends React.Component{
    addEmoji = (text,emoji) => `${emoji} ${text} ${emoji}`
    render(overwrite){
        let text = "I am Emoji component";
        if (overwrite) text = overwrite;
        return <div>{text}</div>
    }
}