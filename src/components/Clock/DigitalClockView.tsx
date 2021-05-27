import React from "react";
import {ClockViewPropsType} from "./Clock";

export const getString = (number: number) => number < 10 ? "0" + number : number

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <><span>{getString(date.getSeconds())}</span>
        :
        <span>{getString(date.getMinutes())}</span>
        :
        <span>{getString(date.getHours())}</span>
    </>
}