const domContainer = document.querySelector("#root")

const Increment = () => {
    const [c,sc] = React.useState(0);
    return(
        <div id="main">
            <h1 id="display">{c}</h1>
            <div>
                <button id="button" onClick={()=>sc(c+1)}>increment +</button>
            </div>
        </div>
    );
}


ReactDOM.render(
    <div className="container">
        <Increment/>
        <Increment/>
        <Increment/>
    </div>, domContainer)
