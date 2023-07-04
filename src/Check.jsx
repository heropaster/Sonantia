import React from "react";
import Button from "@mui/material/Button";

const Check = ({ value }) => {
  const handleClick = () => {
    console.log(value);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Проверка
      </Button>
    </div>
  );
};
export default Check;
