// Inheritence is not a good practice in React //
import Emoji from "./Emoji";

export default class Text extends Emoji{
    constructor(props){
        super(props);
    }
    render(){
        const decoratedText = this.addEmoji("I am JavaScript", "E1")
        return super.render(decoratedText)
    }
}