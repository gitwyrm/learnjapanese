import Quiz from "./components/Quiz";
import "./App.css";
import hiragana from "./hiragana";

function App() {
  return (
    <div className="card">
      <Quiz tokens={hiragana} />
    </div>
  );
}

export default App;
