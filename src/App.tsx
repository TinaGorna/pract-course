import React from "react";
import "./App.module.css";
import Accordion from "./components/Accordion/Accordion"
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
