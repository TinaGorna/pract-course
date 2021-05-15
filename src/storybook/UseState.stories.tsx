import React, {useState} from "react";

export default {
    title: "useState demo"
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}