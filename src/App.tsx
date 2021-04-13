import React from "react";
import "./App.module.css";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


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
