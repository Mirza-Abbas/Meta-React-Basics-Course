function LogicalOperator (){
    const val=prompt("Type any number expcept 0:");

    return(
        <div>
            <h1>Please don't type 0</h1>
            {val && <h2>Yay, no 0 was typed</h2>}
        </div>
    )
}

export default LogicalOperator;