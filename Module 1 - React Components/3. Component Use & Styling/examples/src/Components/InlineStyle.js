function InlineStyle () {
    const styles={
        color: "blue",
        border: "1px solid black",
        backgroundColor: "red"
    }

    return (
        <div>
            <h1 style={{
                color: "red",
                border: "1px solid black",
                backgroundColor: 'blue'
            }}>
                This is an Example of Inline Style
            </h1>

            <h2 style={styles}>
                This is an Example of Inline Style Object Literal saved as a variable
            </h2>
        </div>
    )
}

export default InlineStyle;