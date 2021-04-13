import Accordion, {AccordionBody, AccordionTitle} from "../components/Accordion/Accordion";

import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}
export function UncontrolledAccordion(props:AccordionPropsType ) {
    let [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title={props.title}/>
        <button onClick={ ()=> {setCollapsed (!collapsed)}}>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </div>
}