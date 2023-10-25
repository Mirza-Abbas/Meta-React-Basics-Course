import Child from "./Child";

const data = {
    heading: "SALE!!",
    percent: "90",
    duration: "77-June-2077"
}

function Parent () {
    return (
        <div>
            <Child heading={data.heading} percent={data.percent} duration={data.duration}/>
        </div>
    )
}

export default Parent;