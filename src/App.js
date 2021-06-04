import React from "react";
import Home from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        {/* <Home /> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
