import React from "react";

const ErrorPage = (props) => {
  return (
    <div>
      <h1>Error</h1>
      <button name="reset" type="button" onClick={props.onClick}>
        Try Again
      </button>
    </div>
  );
};
export default ErrorPage;
