import Workdays from "./Workdays";
import Weekends from "./Weekends";

function ConditionalRendering () {
    const day = new Date().getDay();
    

    return(
    <div>
        {day >=1 && day <= 5 ? 
        <Workdays /> :
        <Weekends />}
    </div>
    )
}

export default ConditionalRendering;