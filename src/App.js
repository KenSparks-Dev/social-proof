import React from "react";
import Reviewcards from "./components/Review-Cards";
import Maintext from "./components/MainText";
import Ratings from "./components/Ratings";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="App__section-one">
          <Maintext />
          <Ratings />
      </div>
      <div className="App__section-two">
        <Reviewcards />
      </div>
    </div>
  );
}

export default App;
