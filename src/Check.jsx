import React from "react";
import Button from "@mui/material/Button";
import { Context } from "./context";
const Check = ({ value }) => {
  const handleClick = () => {
    checkAnswer(value)
  };
  function checkAnswer(answer) {
    console.log(answer.toLowerCase())
    if (answer.toLowerCase() ===  Context._currentValue.toLowerCase()) {
      // setUsedWords([...usedWords, currentWord]);
      console.log('Верно')
      document.getElementById('start').disabled = false
    }
    else return console.log('end');
  }
  return (
    <div>
      <Button id="check" variant="outlined" onClick={handleClick}>
        Проверка
      </Button>
    </div>
  );
};
export default Check;
