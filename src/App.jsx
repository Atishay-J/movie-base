import { useState } from "react";
import "./App.css";
import MoviesContainer from "./components/MoviesContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <MoviesContainer/> 
    </div>
  );
}

export default App;
