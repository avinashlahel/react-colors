import React from 'react';
import './App.css';
import Palette from "./Palette";
import seedColors from "./seedColors"
import {generatePallete} from "./colorHelpers";

function App() {
  return (
    <div>
      <Palette palette={generatePallete(seedColors[5])}/>
    </div>
  );
}

export default App;
