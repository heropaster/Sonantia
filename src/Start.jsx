import React, { useState } from "react";
import Button from "@mui/material/Button";

const Start = () => {
  const [usedWords, setUsedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
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
    setCurrentWord(randomWord);
    speakWord(randomWord);
  }
  function speakWord(word) {
    const voices = speechSynthesis.getVoices();
    let utter = new SpeechSynthesisUtterance(word);
    utter.lang = "en";
    utter.voice = voices[4];
    speechSynthesis.speak(utter);
  }
  function checkAnswer(answer) {
    if (answer.toLowerCase() === currentWord.toLowerCase()) {
      setUsedWords([...usedWords, currentWord]);
      if (usedWords.length < words.length) {
        startGame();
      } else return <h2>Слова закончились</h2>;
    }
  }
  return (
    <div>
      <Button id="start" variant="filled" onClick={startGame}>
        Начать игру
      </Button>
    </div>
  );
};
export default Start;
