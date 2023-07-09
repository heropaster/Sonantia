import React from "react";
import "./styles/App.css";
import Interactions from "./components/Interactions/Interactions.tsx";
import About from "./components/About/About.tsx";
function App() {
  return (
    <div className="App">
      <About />
      <h1 className="title">Sonantia</h1>
      <Interactions />
    </div>
  );
}

export default App;
