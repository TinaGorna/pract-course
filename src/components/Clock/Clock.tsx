import React, {useEffect, useState} from "react"

type PropsType = {}

const getString = (number: number) => number < 10 ? "0" + number : number

export const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {


        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
        }                              //компонента будет либо перерисовываться, либо умирать (как componentWillUnmount)
        clearInterval(intervalId)     //т.е. вызоветься один раз, когда компонента будет демонтирована


    }, []);


    return (
        <div>
            <span>{getString(date.getSeconds())}</span>
            :
            <span>{getString(date.getMinutes())}</span>
            :
            <span>{getString(date.getHours())}</span>
        </div>
    )
}