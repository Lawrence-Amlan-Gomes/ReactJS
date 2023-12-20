import withCounter from "./withCounter"
const ClickCounter = (props)=>{
    const {count, incrementCount} = props
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                <h1>Clicked {count} times</h1>

            </button>
        </div>
    )
}
export default withCounter(ClickCounter)
