import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./components/Button";

const Application = () => {
  const reset = () => {
    setName("");
  };
  const [name, setName] = useState("");

  return (
    <main>
      <input
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>

      <Button resetFunction={reset} />
      {name && <h1> Hello {name} </h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
