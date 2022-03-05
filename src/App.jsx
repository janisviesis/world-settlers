import React, { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Info } from "./components/Info";
import { PLAYERS } from "./constants";

const getRandom = () => {
  return Math.floor(Math.random() * 11) + 2;
};

function App() {
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState(getRandom());

  const handleClick = () => {
    activePlayer === PLAYERS.length - 1 ? setActivePlayer(0) : setActivePlayer(activePlayer + 1);
    setDice(getRandom());
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Board activePlayer={PLAYERS[activePlayer]} />
        <Info activePlayer={activePlayer} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "50px",
        }}
      >
        <div>
          <button style={{ width: "120px", cursor: "pointer" }} onClick={handleClick}>
            Next
          </button>
        </div>
        <div>
          <p>{dice}</p>
        </div>
      </div>
    </>
  );
}

export default App;
