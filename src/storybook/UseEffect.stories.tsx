import React, {useState, useEffect} from "react";

export default {
    title: "useEffect demo"
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {        //передали callback функцию
        console.log("useEffect");
        //api.gerUsers().then('')
        //setInterval
        //indexedDB
        //document.gerElementId
        //document.title = 'User';
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}