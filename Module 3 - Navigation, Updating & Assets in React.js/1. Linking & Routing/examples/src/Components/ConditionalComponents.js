import Workdays from './Workdays';
import Weekends from './Weekends';


function ConditionalComponents (props) {
    const day=props.day;

    if(day>=1 && day<=5){
        return <Workdays />;
    }
    else{
        return <Weekends />;
    }
}

export default ConditionalComponents;