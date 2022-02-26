import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button";

const Application = () => {


  return (
    <main>
      <h1>Hello React</h1>
      <Button/>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
