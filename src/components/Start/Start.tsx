import React from "react";
import Button from "@mui/material/Button";
interface Props {
  setWord: React.Dispatch<React.SetStateAction<string>>,
  setWords: React.Dispatch<React.SetStateAction<number>>
}
const Start: React.FC<Props> = ({setWord, setWords}) => {
  const API_KEY = "j6eZFv9uzViQMPdIS/IPVg==dpsc5NJCdJqC70k2"
  let synth = window.speechSynthesis;
  
  
  async function startGame() {
    const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
    headers: {'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'},
    })
    const data = await response.json();
    const randomWord = data.word;
    console.log(randomWord)
    setWords(5)
    // if (randomWord === undefined) {
    //   if (startButton) {
    //     startButton.disabled = true;
    //   }
    //   return setWord('undefined')
    // }
    // else {
      setWord(randomWord);
      speakWord(randomWord);
    // }
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
