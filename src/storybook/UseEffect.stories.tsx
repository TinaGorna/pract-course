import React, {useState, useEffect} from "react";

export default {
    title: "useEffect demo"
}

//useEffect срабатывает только после того, когда разметка уже отобразилась на странице, потом реакт запускает Effect

export const Example1 = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {        //передали callback функцию
        console.log("useEffect");
        //api.gerUsers().then('')
        //setInterval
        //indexedDB
        //document.gerElementId
        //document.title = 'User';
    }, [counter]) //передаем зависимость (то, от чего мы зависим, например, counter), чтобы не перезапускаться каждый раз. Если counter не меняется, useEffect не меняется. При переданной зависимости useEffect запускается дважды. Если передаем пустой массив [], useEffect сработает один раз: при вмонтировании компноненты; при изменениях компоненты он срабатывать не будет.

    useEffect(() => {
        console.log("useEffect every render"); //нет зависимостей
        document.title = counter.toString();
    },);
    useEffect(() => {

        console.log("useEffect only first render (componentDidMount analog)"); //пустой массив зависимостей
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);


    useEffect(() => {
        console.log("useEffect every render"); //нет зависимостей
        document.title = counter.toString();
    });

    /*useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString();
        }, 1000)
    }, [counter]);*/

    useEffect(() => {    //здесь происходит замыкание. setInterval берет каждый раз единицу из useState и не происходит перерисовка.
        setInterval(() => {
            setCounter(counter + 1);
        }, 1000)
    }, []);

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1);  //чтобы происходила перерисовка, берем актуальное значение state
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/* <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>*/}
    </>
}