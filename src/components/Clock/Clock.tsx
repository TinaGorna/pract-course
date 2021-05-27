import React, {useEffect, useState} from "react"
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode?: "digital" | "analog"
}

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

    let view;

    switch (props.mode) {
        case "analog" :
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}

