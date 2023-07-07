import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
import Score from "../Score/Score.jsx";
const Check = ({ value, words }) => {
  const [score, setScore] = useState(0)
  const handleClick = () => {
    checkAnswer(value)
  };
  function checkAnswer(answer) {

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
