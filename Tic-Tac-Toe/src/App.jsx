import React, { useState } from "react";
import "./App.css";

function App() {
  const [boardata, setBoardData] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const switchPlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  };
  const updateTilesVal = (index) => {
    const newBoardData = boardata.slice();
    if (newBoardData[index] === null) {
      newBoardData[index] = player;
      setBoardData(newBoardData);
      switchPlayer();
    }
  };
  const Tile = ({ tile, index }) => {
    return (
      <div
        className="Tile"
        onClick={() => {
          updateTilesVal(index);
        }}
      >
        <h1>{tile}</h1>
      </div>
    );
  };
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boardata[a] &&
        boardata[a] === boardata[b] &&
        boardata[a] === boardata[c]
      ) {
        return boardata[a] + "🏆";
      }
    }
    return null;
  };
  return (
    <div className="App">
      <div className="BoardGame">
        {boardata.map((tile, index) => {
          return <Tile tile={tile} index={index} key={index} />;
        })}
      </div>
      <p>the winner 's {checkWinner()} </p>
      <button
        className="btn"
        onClick={() => {
          setBoardData(Array(9).fill(null));
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
