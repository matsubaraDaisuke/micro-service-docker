import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const makeApiRequrest = () =>{
    console.log('makeApiRequrest')
    axios("/api/testwithcurrentuser")
    .then(response=>{
      console.log("response",response)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!! Hello from inside
          docker Hi I'm development
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequrest}>Make api</button>
    </div>
  );
}

export default App;
