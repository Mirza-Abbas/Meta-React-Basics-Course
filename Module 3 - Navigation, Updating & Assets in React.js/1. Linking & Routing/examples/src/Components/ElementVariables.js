import Weekends from "./Weekends";
import Workdays from "./Workdays";

function ElementVariables ({day}){
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if(weekday){
        message = <Workdays />;
    }
    else if(weekend){
        message = <Weekends />;
    }
    else{
        message = <h1>Error</h1>;
    }

    return(
        <div>
            {message}
        </div>
    )
}

export default ElementVariables;