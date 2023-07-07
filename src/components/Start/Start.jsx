import React, { useEffect, useState} from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
const Start = ({setWords}) => {
  let synth = window.speechSynthesis;
  const words = [
    "cucumber",
    "queue",
    "queen",
    "painless",
    "shame",
    "literally",
    "lientenaunt",
    "ironic",
    "irregardless",
    "colonel",
  ];
  
  let unusedWors = [...words]
  function startGame() {
    let randomWord = unusedWors[Math.floor(Math.random() * unusedWors.length)];
    if (randomWord == undefined) {
      document.getElementById('start').disabled = true;
      return Context._currentValue = 'undefined';
    }
    else {
      Context._currentValue = randomWord;
      unusedWors = unusedWors.filter((word) => word !== randomWord);
      console.log(randomWord)
      speakWord(randomWord);
    }
  }
  function speakWord(word) {
    let utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en";
    synth.speak(utter);
  }

  return (
    <div>
      <Button id="start" variant="outlined" onClick={startGame}>
        Начать игру
      </Button>
    </div>
  );
};

export default Start;
