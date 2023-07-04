import React, { useState } from "react";
import WordInput from "./wordInput";
import Check from "./Check";
import Start from "./Start";

const Interactions = () => {
  const [inputValue, setInputValue] = useState("");
  const handleValueChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="interaction">
      <Start />
      <WordInput onValueChange={handleValueChange} />
      <Check value={inputValue} />
    </div>
  );
};
export default Interactions;
