import React, {useState} from "react";
import "./App.module.css";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion title={"Menu"}/>

            <UncontrolledRating/>
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
