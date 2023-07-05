import React, { useEffect, useState} from "react";
import Button from "@mui/material/Button";
import { Context } from "./context";
import { useContext } from "react";
const Start = () => {
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
    console.log(Context._currentValue)
    document.getElementById('start').disabled = true;
  }
  function speakWord(word) {
    const voices = speechSynthesis.getVoices();
    let utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en";
    utter.voice = voices[4];
    speechSynthesis.speak(utter);
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
