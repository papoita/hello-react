import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button";
import Input from "./components/Input";

const Application = () => {
  const [name, setName] = useState("paola");

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Input>input</Input>
      <Button resetFunction={reset} />
      <h1>Hello {name} </h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
