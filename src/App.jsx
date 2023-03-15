import { useState } from "react";
import { Webscrape } from "./WebScrape";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>WebScraper . com</h1>
      <p>you can Search any Amazon products here</p>
      <Webscrape />
    </div>
  );
}

export default App;
