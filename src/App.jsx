import Quiz from "./components/Quiz";
import "./App.css";
import hiragana from "./hiragana";
import katakana from "./katakana";

function App() {
  return (
    
      <div className="side-by-side">
        <div className="card">
          <h1>Hiragana</h1>
          <Quiz tokens={hiragana} />
        </div>
        <div style={{ width: "20px" }}></div>
        <div className="card">
          <h1>Katakana</h1>
          <Quiz tokens={katakana} />
        </div>
      </div>
    
  );
}

export default App;
