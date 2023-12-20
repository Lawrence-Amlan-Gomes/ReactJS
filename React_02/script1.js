const domContainer = document.querySelector("#root")

var s = 0
var s1 = 5
var m = 9
var m1 = 5
var h = 3
var h1 = 2

setInterval(() =>{
    const element = (
        <div id="mainclock">
            {new Date().toLocaleTimeString()}<br></br>
        </div>
    )
    

   
     ReactDOM.render(element, domContainer)

 },1000);
