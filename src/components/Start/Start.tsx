import React, { useContext } from "react";
import Button from "@mui/material/Button";
interface Props {
  setWord: React.Dispatch<React.SetStateAction<string>>;
}
const Start: React.FC<Props> = ({setWord}) => {
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
    const startButton = document.getElementById('start') as HTMLButtonElement;
    if (randomWord === undefined) {
      if (startButton) {
        startButton.disabled = true;
      }
      return setWord('undefined')
    }
    else {
      setWord(randomWord);
      unusedWors = unusedWors.filter((word) => word !== randomWord);
      console.log(randomWord)
      speakWord(randomWord);
    }
  }
  function speakWord(word:string) {
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
