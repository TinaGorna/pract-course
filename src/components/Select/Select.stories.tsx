import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select stories",
    component: Select,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;

export const WithValue = () =>
    <>
        <Select onChange={action("Value changed")}
                value={"2"}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>

export const WithoutValue = () =>
    <>
        <Select onChange={action("Value changed")}
                items={[
                    {value: "1", title: "Minsk"},
                    {value: "2", title: "Moscow"},
                    {value: "3", title: "Kiev"}
                ]}/>
    </>