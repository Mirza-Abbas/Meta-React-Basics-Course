function UserEvents () {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On!</h1>;
    const lightMode = <h1>Light Mode is On!</h1>;

    function clickHandler () {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log("Dark Mode is On!");
        }
        else {
            console.log("Light Mode is On!");
        }
    }
    
    return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={clickHandler}>
            Click Me
        </button>
    </div>
    )
}

export default UserEvents;