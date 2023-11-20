import "./App.css";
import ActiveFiltersList from "./components/ActiveFiltersList";
import MoviesContainer from "./components/MoviesContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ActiveFiltersList />
      <MoviesContainer />
    </div>
  );
}

export default App;
