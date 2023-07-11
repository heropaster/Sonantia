import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
interface Props {
  onValueChange: (value: string) => void;
}
const WordInput: React.FC<Props> = ({ onValueChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // console.log(value)
  };
  useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);
  return (
    <div>
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
