import React from "react";
import MultiStepForm from "./components/multi-step-Form";
import SingleStepForm from "./components/singleForm/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        {/* Multi step form goes here */}
        <MultiStepForm />

        {/* Single step form goes here */}
        {/* <SingleStepForm /> */}
      </header>
    </div>
  );
}

export default App;
