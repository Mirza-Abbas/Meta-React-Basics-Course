// Handling Event using inline anonymous ES5 functions:

function ES5_Function (){
    return (
        <button onClick={function () {
            console.log("Clicked");
        }}>
            Click Me!
        </button>
    )
}

export default ES5_Function;