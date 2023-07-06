import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
import Score from "../Score/Score.jsx";
const Check = ({ value }) => {

  const handleClick = () => {
    checkAnswer(value)
  };
  function checkAnswer(answer) {
    console.log(answer.toLowerCase())
    if (answer.toLowerCase() ===  Context._currentValue.toLowerCase()) {
    }
   
  }
  return (
    <div>
      <Score completed={50}/>
      <Button id="check" variant="outlined" onClick={handleClick}>
        Проверка
      </Button>
    </div>
  );
};
export default Check;
