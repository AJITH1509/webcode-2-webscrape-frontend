import { useState } from "react";
import { Webscrape } from "./WebScrape";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>WebScraping . com</h1>
      <p>"You can Search any Amazon products here"</p>
      <Webscrape />
    </div>
  );
}

export default App;
