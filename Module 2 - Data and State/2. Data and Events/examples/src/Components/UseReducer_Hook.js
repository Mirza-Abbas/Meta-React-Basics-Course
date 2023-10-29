import { useReducer } from "react";

const Reducer = (state, action) => {
    if (action.type === 'ride') return {money: state.money + 10}
    if (action.type === 'fuel') return {money: state.money - 50}
};

function UseState_Hook() {
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(Reducer, initialState);

    return(
        <div>
            <h1>Wallet: {state.money}</h1>
            <button onClick={()=> dispatch({type: 'ride'})}>
                A new Customer!
            </button>
            <button onClick={()=> dispatch({type: 'fuel'})}>
                Refill The Tank!
            </button>
        </div>
    )
}

export default UseState_Hook;