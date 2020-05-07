import React from "react";
import "./App.css";
import ShowSmurf from './components/ShowSmurf';
import AddSmurf from './components/AddSmurf';

export default function App() {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ <strike>Redux</strike> <strike>Context!</strike> Redux again!</h1>
          <ShowSmurf />
          <AddSmurf />
    </div>
  );
}
