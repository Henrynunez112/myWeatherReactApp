import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} name={props.name} onClick={props.onClick}>
        Click
      </button>
    </div>
  );
};

export default Button;
