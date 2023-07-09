import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Score from "../Score/Score.tsx";
const Check = (props: {value: string, word: string, wordsList: string[]}) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    checkAnswer(props.value)
  };
  function checkAnswer(answer: string) {

    if (answer.toLowerCase() ===  props.word.toLowerCase()) {
      
      setScore(score + Math.floor(1 / props.wordsList.length * 100))
    }
   
  }
  return (
    <div>
      <Score completed={score}/>
      <Button id="check" variant="outlined" onClick={handleClick}>
        Проверка
      </Button>
    </div>
  );
};
export default Check;
