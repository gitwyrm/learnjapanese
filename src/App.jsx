import Quiz from "./components/Quiz";
import "./App.css";
import hiragana from "./tokens/hiragana";
import katakana from "./tokens/katakana";
import KanjiQuiz from "./components/KanjiQuiz";
import kanji from "./tokens/kanji";

function App() {
  return (
    <div>
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
      <br />
      <div className="card">
        <h1>Kanji</h1>
        <h3>On'yomi</h3>
        <KanjiQuiz tokens={kanji} type={"on'yomi"} />
      </div>
      <br />
      <div className="card">
        <h1>Kanji</h1>
        <h3>Kun'yomi</h3>
        <KanjiQuiz tokens={kanji} type={"kun'yomi"} />
      </div>
      <br />
      <div className="card">
        <h1>Kanji</h1>
        <h3>English</h3>
        <KanjiQuiz tokens={kanji} type={"english"} />
      </div>
    </div>
  );
}

export default App;
