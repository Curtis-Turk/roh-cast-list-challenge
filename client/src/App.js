import "./App.css";
import fetchEventDetails from "./api/fetchEventDetails";

fetchEventDetails("http://localhost:3001/")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

function App() {
  return (
    <div className="App">
      <h1>Cast List challenge</h1>
      <div>{}</div>
    </div>
  );
}

export default App;
