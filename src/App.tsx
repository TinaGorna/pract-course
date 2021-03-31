import React from "react";
import "./App.module.css";
import Accordion from "./components/Accordion/Accordion"
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
      <div className="App">
        <Rating value = {3}/>
        <Accordion/>
      </div>
  );
}


export default App;
