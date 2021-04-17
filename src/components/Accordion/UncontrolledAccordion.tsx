import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

export function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div>
            {/* <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionPropsType = {
    title: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </div>
    )
}

export function AccordionBody() {
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

export default UncontrolledAccordion