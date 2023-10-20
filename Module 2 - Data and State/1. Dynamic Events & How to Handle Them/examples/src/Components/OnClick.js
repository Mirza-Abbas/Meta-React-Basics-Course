function OnClick() {
    const clickHandler = () => console.log("Clicked");  //This'll display in dev tool's console tab

    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    )
}

export default OnClick;