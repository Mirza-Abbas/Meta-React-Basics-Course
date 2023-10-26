import { useState } from "react";

function UseState_Hook () {
    const [inputText, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
        <label>Type Here: </label>
        <input value={inputText} onChange={handleChange} />
        <p>You typed: {inputText}</p>
        <button onClick={() => setText("")}>
            Reset
        </button>
        </>
    )
}

export default UseState_Hook;