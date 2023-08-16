import React, { useState } from "react";
import WordInput from "../WordInput/wordInput.tsx";
import Check from "../Check/Check.tsx";
import Start from "../Start/Start.tsx";

const Interactions = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentWord, setCurrentWord] = React.useState<string>('')
  const [words, setWords] = useState<number>(0);
  const handleValueChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div className="interaction">
      <Start setWord={setCurrentWord} setWords={setWords}/>
      <WordInput onValueChange={handleValueChange} />
      <Check value={inputValue} word={currentWord} wordsList={words} />
    </div>
  );
};
export default Interactions;
