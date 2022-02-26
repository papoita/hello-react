import { useState } from "react";
import ReactDOM from "react-dom";

const Input = () => {
  const [name, setName] = useState("");

  return (
    <input
      placeholder="Enter your name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Input;
