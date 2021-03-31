import React from "react";
import "./App.module.css";
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"Users"}/>
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
