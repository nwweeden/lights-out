import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <div className = 'container'>
          <div className = 'welcome'>
            <h1>Welcome to <strong>Lights Out</strong></h1>
            <h5><i>Lights Out is a puzzle, played on a grid of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off. You can click on a cell to toggle that light — but it also toggles the light above, to the left, to the right, and below it.</i></h5>
            <br></br>
            <h5><strong>Good Luck!</strong></h5>
            <br></br>
          </div>
          <Board />
        </div>
      </div>
  );
}

export default App;
