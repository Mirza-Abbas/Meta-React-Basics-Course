function FunctionInvocation2 (){
    const getNum = () => Math.floor(Math.random() * 10) + 1;
    
    return (
        <div>
            <h1>Here's a random number from 0 to 10: {getNum()}</h1>
        </div>
    )
}

export default FunctionInvocation2;