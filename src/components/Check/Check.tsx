import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Score from "../Score/Score.tsx";
const Check = (props: {value: string, word: string}) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    checkAnswer(props.value)
  };
  function checkAnswer(answer: string) {

    if (answer.toLowerCase() ===  props.word.toLowerCase()) {
      console.log(+1)
      setScore(score + 10)
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
