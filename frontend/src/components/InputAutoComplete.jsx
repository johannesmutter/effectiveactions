import React, { useState } from "react";

const InputAutoComplete = ({ data, onSelect }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (item) => {
    onSelect(item);
    inputValue = "";
  };

  const filterData = () => {
    if (!inputValue) {
      return [];
    } else {
      return data.filter((item, i) => item.startsWith(inputValue)).slice(0, 5);
    }
  };

  const filteredData = (
    <div>
      {filterData().map((item, i) => (
        <div key={i}>
          {item} <span onClick={handleSelect.bind(null, item)}>+</span>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <input value={inputValue} type="text" onChange={handleChange} />
      {filteredData}
    </div>
  );
};

export default InputAutoComplete;
