import Grandchild from "./Grandchild";

function Child (props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h2>{props.percent}% off</h2>
            <Grandchild duration={props.duration} />
        </div>
    )
}

export default Child;