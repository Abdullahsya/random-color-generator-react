import React, { useState } from 'react';
import './App.css';
//This is the function which generates the new color using for loop
function getNewColor() {
  var symbols, color;
  symbols = '0123456789ABCDEF';

  color = '#';
  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}
//This is the function (component) which calls the getNewColor function when clicking onClick
function App() {
  const [color, setColor] = useState(getNewColor());
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="App"
    >
      <span id="hex">{color}</span>
      <button onClick={() => setColor(getNewColor())}>Get New Color</button>
    </div>
  );
}

export default App;
