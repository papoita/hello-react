import React from "react";

const Button = (props) => {
  
  

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
