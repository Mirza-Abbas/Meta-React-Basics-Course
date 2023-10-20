function OnMouseOver() {
    const clickHandler = () => console.log("Clicked");  //This'll display in dev tool's console tab

    return (
        <button onMouseOver={clickHandler}>
            Click Me
        </button>
    )
}

export default OnMouseOver;