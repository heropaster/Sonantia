import React, { useState } from "react";
import WordInput from "../WordInput/wordInput.jsx";
import Check from "../Check/Check.js";
import Start from "../Start/Start.jsx";

const Interactions = () => {
  const [inputValue, setInputValue] = useState("");
  // const [words, setWords] = useState([])
  const handleValueChange = (value: string) => {
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
