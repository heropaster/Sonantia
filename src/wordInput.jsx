import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const WordInput = ({ onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  return (
    <div>
      <h1>{value}</h1>
      <TextField
        className="wordinput"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default WordInput;
