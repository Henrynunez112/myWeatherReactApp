import React from "react";

const InputField = (props) => {
  return (
    <div>
    <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      
    </div>
  );
};

export default InputField;
