import React, { useState } from "react";
import Button from "@mui/material/Button";

const ButtonComp = ({ value }) => {
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
export default ButtonComp;
