import React, { useState} from "react";

const StateCounter = () => {

    const [count, setCount] = useState(() => {
        console.log("prints");
        return 4;
    });
    console.log("component calls");

    function decrementCount() {
        setCount((prevCount)=> prevCount - 1 );
    }
    function incrementCount() {
        setCount((prevCount)=> prevCount + 1 );
        
    }

    return (
        <>
            <button onClick={decrementCount}> - </button>
            <span> {count} </span>
            <button onClick={incrementCount}> + </button>
        </>
    )
    
}

export default StateCounter;


