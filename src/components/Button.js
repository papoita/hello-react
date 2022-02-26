import React from "react";

const Button = (props) => {
  console.log("++++++", props);
  

  const handleClick = () => {
    props.resetFunction();
  };
  return (
    <button onClick={handleClick} className="button">
      reset
    </button>
  );
};

export default Button;
