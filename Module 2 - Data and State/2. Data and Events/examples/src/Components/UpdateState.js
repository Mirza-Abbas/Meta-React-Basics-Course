import { useState } from "react";

function UpdateState() {
    const [word, setWord] = useState('Eat');

    // setWord('Don\'t Eat'); Can't update state directly

    function handleClick(){
        setWord('Drink');
    }


    return(
        <div>
            <h1>{word + ' at Little Lemon'}</h1>
            <button onClick={handleClick}>
                Click here
            </button>
        </div>
    )
}

export default UpdateState;