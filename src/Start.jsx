import React, { useState } from 'react';
import Button from "@mui/material/Button";

const Start = () => {
    const [usedWords, setUsedWords] = useState([]);
    const [currentWord, setCurrentWord] = useState('');

    const words = [
        'queue',
        'impressive',
        'lientenaunt',
        'sonantia',
        'improve',
        'scotland',
        'first of all'
    ]
    function startGame() {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord + ':random')
        setCurrentWord(randomWord);
        setUsedWords([...usedWords, currentWord]);
        soundIt(randomWord)
    }
    function soundIt(word) {
        let utter = new SpeechSynthesisUtterance(word);
        const voices = speechSynthesis.getVoices();
        utter.lang = "en";
        utter.voice = voices[3];
        speechSynthesis.speak(utter);
        checkAnswer()
    }
    function checkAnswer() {
        
    }
    return (
        <div>
        <Button variant='filled' onClick={startGame}>Начать</Button>
        </div>
    )
}
export default Start