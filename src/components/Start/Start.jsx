import React, { useEffect, useState} from "react";
import Button from "@mui/material/Button";
import { Context } from "../Context/context.js";
import { useContext } from "react";
const Start = () => {
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
  
  function startGame() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    Context._currentValue = randomWord;
    speakWord(randomWord);
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
