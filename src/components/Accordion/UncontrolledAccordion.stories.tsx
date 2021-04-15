import React, {useState} from "react";
import {Story, Meta} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: "UncontrolledAccordion",
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => {
    return <UncontrolledAccordion title={"Menu"}/>
};