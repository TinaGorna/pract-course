import React from "react";
import {Meta} from "@storybook/react";
import {Clock} from "./Clock";


export default {
    title: "Clock",
    component: Clock,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;

export const BaseAnalogExample = () => {
    return <Clock mode={"analog"}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={"digital"}/>
}