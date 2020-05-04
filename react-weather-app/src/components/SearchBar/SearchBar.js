import React from "react";
import InputField from "../../elements/InputField";
import Button from "../../elements/Button";

const SearchBar = (props) => {
  return (
    <div>
      <InputField
        type="text"
        name="city"
        label="location"
        placeholder="Enter City"
        value={props.value}
        onChange={props.onChange}
      />
      <Button name="searchSubmit" type="submit" onClick={props.onClick} />
    </div>
  );
};
export default SearchBar;
