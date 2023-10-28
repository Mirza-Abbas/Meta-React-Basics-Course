//Props drilling means passing a prop through props objects through several layers of components

function PropDrilling(props) {
    return <Header msg={props.msg} />;
};

function Header(props) {
    return (
        <div style={{ border: "10px solid gray" }}>
            <h1>This is the Header component</h1>
            <Wrapper msg={props.msg} />
        </div>
    );
};

function Wrapper(props) {
    return (
        <div style={{ border: "10px solid black" }}>
            <h2>This is the Wrapper component</h2>
            <Button msg={props.msg} />
        </div>
    );
};

function Button(props) {
    return (
        <div style={{ border: "20px solid orange" }}>
            <h3>This is the Button component</h3>
            <button onClick={
                () => alert(props.msg)
                } 
                style={
                    {border: "5px solid Green"}
                }>
                Click me!
            </button>
        </div>
    );
};

export default PropDrilling;