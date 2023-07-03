import React, { useState } from "react";
import WordInput from "./wordInput";
import ButtonComp from "./buttonComp";

const Interactions = () => {
  const [inputValue, setInputValue] = useState("");
  const handleValueChange = (value) => {
    setInputValue(value);
  };
  return (
    <div className="interaction">
      <WordInput onValueChange={handleValueChange} />
      <ButtonComp value={inputValue} />
    </div>
  );
};
export default Interactions;
