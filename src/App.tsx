import React from "react";
import "./App.module.css";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";


function App() {
    return (
        <div className="App">
            <UncontrolledAccordion title={"Menu"}/>
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
