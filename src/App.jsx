import "./App.css";
import { useState } from "react";
import CurrentAge from "./CurrentAge";
import Results from "./Results";
function App() {
  const [currentAge, setCurrentAge] = useState({});
  return (
    <>
      <div className="app-container">
        <CurrentAge currentAge={currentAge} setCurrentAge={setCurrentAge} />
        <Results currentAge={currentAge} />
      </div>
    </>
  );
}

export default App;
