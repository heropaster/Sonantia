import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
import Score from "../Score/Score.jsx";
const Check = (props: {value: string}) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    checkAnswer(props.value)
  };
  function checkAnswer(answer: string) {

    if (answer.toLowerCase() ===  Context._currentValue.toLowerCase()) {
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
