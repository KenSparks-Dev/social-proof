import React from "react";
import Reviewcards from "./components/Review-Cards";
import Maintext from "./components/MainText";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Maintext/>
      <Reviewcards/>
    </div>
  );
}

export default App;
