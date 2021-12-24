import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import { Info } from "./components/Info";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Board />
      <Info />
    </div>
  );
}

export default App;
