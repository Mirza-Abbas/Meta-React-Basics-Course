import { useState } from "react";

function Stateful_Component (props) {
    const [word, setWord] = useState(props.word);   

    return (
        <h1>{word}</h1>     //Renders text contained in a variable
    )
}

export default Stateful_Component;