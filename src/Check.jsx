import React from "react";
import Button from "@mui/material/Button";

const Check = ({ value }) => {
  const handleClick = () => {
   console.log(value)
  };
  function checkAnswer(answer) {
    if (answer.toLowerCase() === 'damn'.toLowerCase()) {
      // setUsedWords([...usedWords, currentWord]);
      console.log('Верно')
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
