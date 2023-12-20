const scaleName = {
    c : 'Celsius',
    f : 'Fahrenheit'
}
export default function TemInput({temparature, scale, onTemChange}){
    return(
        <fieldset>
                <legend>Enter temparature in {scaleName[scale]}</legend>
                <input type="text" value={temparature} onChange={(e) => onTemChange(e,scale)}/>
        </fieldset>
    )
}