import "./App.css";
import fetchEventDetails from "./api/fetchEventDetails";

function App() {
  return (
    <div className="App">
      <h1>Cast List challenge</h1>
      <div>{fetchEventDetails()}</div>
    </div>
  );
}

export default App;
