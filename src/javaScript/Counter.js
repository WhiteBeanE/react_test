import React, { useState } from "react";

function Counter(){

    const [number, setNumber] = useState(0);
    const plusH = () => {
        setNumber(number => number + 1);
        console.log(number);
    }
    const miusH = () => {
        if(number === 0){
            console.log('-값은 될 수 없습니다.');
            return;
        }
        setNumber(number - 1);
        console.log(number);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={plusH}>+</button>
            <button onClick={miusH}>-</button>
        </div>
    );
}

export default Counter;