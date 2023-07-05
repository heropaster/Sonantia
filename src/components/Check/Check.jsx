import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
const Check = ({ value }) => {
  const [result, setResult] = useState();
  
  const handleClick = () => {
    checkAnswer(value)
  };
  function checkAnswer(answer) {
    console.log(answer.toLowerCase())
    if (answer.toLowerCase() ===  Context._currentValue.toLowerCase()) {
    result = true;
    }
    else {
      result = false;
    }
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
