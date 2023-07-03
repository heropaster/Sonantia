import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
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
      <h3>{value}</h3>
      <TextField
        className="wordinput"
        id="outlined-basic"
        label="Твой вариант"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default WordInput;
