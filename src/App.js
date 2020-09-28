import React from "react";
import Reviewcards from "./components/Review-Cards";
import Maintext from "./components/MainText";
import Ratings from "./components/Ratings";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Maintext/>
      <Ratings/>
      <Reviewcards/>
    </div>
  );
}

export default App;
