// Handling Event using separate function expression:

function Function_Expression(){    
    const click = () => console.log('click');

    return (
        <button onClick={click}>
            Click Me!
        </button>
    )
}

export default Function_Expression;