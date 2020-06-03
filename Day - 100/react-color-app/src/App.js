import React from 'react';
import Palatte from './Palatte';
import './App.css';
import seedPalatte from "./seedPalatte";

function App() {
  return (
    <div>
       <Palatte {...seedPalatte[0]}/>
    </div>
  );
}

export default App;
