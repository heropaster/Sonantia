import React, { useState } from "react";
import Button from "@mui/material/Button";

const ButtonComp = ({ value }) => {
  const handleClick = () => {
  let utter = new SpeechSynthesisUtterance(value)
  utter.lang = "en"
  speechSynthesis.speak(utter)
  console.log(utter)
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Проверка
      </Button>
    </div>
  );
};
export default ButtonComp;
