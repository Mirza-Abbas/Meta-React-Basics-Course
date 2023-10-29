import React from "react";

function Fruits(prop) {

    return (
        <div>
            {prop.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits