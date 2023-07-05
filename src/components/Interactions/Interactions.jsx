import React, { useState } from "react";
import WordInput from "../WordInput/wordInput.jsx";
import Check from "../Check/Check.jsx";
import Start from "../Start/Start.jsx";

const Interactions = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = useState("")
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
