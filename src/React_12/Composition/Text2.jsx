export default function Text2({BraketEmoji,addEmoji,addBraket}){
    let text = "I am JavaScript";
    if (BraketEmoji){
        if (addEmoji){
            text = addEmoji(text, "E1");
        }
        if (addBraket){
            text = addBraket(text);
        }
    }else{
        if (addBraket){
            text = addBraket(text);
        }
        if (addEmoji){
            text = addEmoji(text, "E1");
        }
    }
    
    return <div>{text}</div>
}