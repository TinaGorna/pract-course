import React from "react";

function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}
type AccordionPropsType = {
    title: string
}
function AccordionTitle(props: AccordionPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
function AccordionBody () {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion