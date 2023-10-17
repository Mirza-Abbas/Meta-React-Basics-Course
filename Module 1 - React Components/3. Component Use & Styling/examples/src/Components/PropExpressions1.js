const bool = false; 

function BoolProp(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default function PropExpressions1(){
    return <BoolProp toggleBoolean={!bool}/>
};