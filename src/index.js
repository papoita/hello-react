import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button";

const Application = () => {

  const [name, setName] = useState("paola");
 
  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button resetFunction={reset} />
      <h1>Hello {name} </h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
