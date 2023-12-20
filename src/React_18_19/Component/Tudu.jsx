import { useState } from "react";
function Tudo() {
    const [tudo, setTudo] = useState('')
    const [warning, setWarning] = useState(null)
    const handleChange = (e) =>{
        const inputValue = e.target.value;
        const newwarning = inputValue.includes('.js')
        ?'You need JavaScriped skill to white it'
        :null;
        setTudo(inputValue);
        setWarning(newwarning);

    };
    return(
        <div>
            <p>{tudo}</p>
            <p>
                <textarea name="tudo" value={tudo} onChange={handleChange}/>
                <hr />
                <h2>{warning || "Good Choice!"}</h2>
            </p>
        </div>
    );
}
export default Tudo;