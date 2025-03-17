import React, { useState, useEffect } from "react";

const getRandomIndices = (excludeIndex, count, max) => {
  const indices = [];
  while (indices.length < count) {
    const randIndex = Math.floor(Math.random() * max);
    if (randIndex !== excludeIndex && !indices.includes(randIndex)) {
      indices.push(randIndex);
    }
  }
  return indices;
};

const KanjiQuiz = ({ tokens, type }) => {
  const [shuffledTokens, setShuffledTokens] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResult, setAnswerResult] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);

  const getText = (kanji, type) => {
    if (type === "english") {
      return kanji.english.join(", ");
    } else {
      const readings = kanji.romaji
        .filter((r) => r.type === type)
        .map((r) => r.value);
      return readings.join(", ");
    }
  };

  const startQuiz = () => {
    let filteredTokens = tokens;
    if (type === "on'yomi" || type === "kun'yomi") {
      filteredTokens = tokens.filter((token) =>
        token.romaji.some((r) => r.type === type),
      );
    }
    const shuffled = [...filteredTokens].sort(() => Math.random() - 0.5);
    setShuffledTokens(shuffled);
    setCurrentIndex(0);
    setUserAnswers([]);
    setAnswerResult(null);
  };

  useEffect(() => {
    startQuiz();
  }, [tokens, type]);

  useEffect(() => {
    if (shuffledTokens.length > 0 && currentIndex < shuffledTokens.length) {
      const currentKanji = shuffledTokens[currentIndex];
      const correctText = getText(currentKanji, type);
      const otherIndices = getRandomIndices(
        currentIndex,
        2,
        shuffledTokens.length,
      );
      const incorrectTexts = otherIndices.map((index) =>
        getText(shuffledTokens[index], type),
      );
      const options = [correctText, ...incorrectTexts].sort(
        () => Math.random() - 0.5,
      );
      setCurrentOptions(options);
    }
  }, [currentIndex, shuffledTokens, type]);

  const handleAnswer = (selected) => {
    const currentKanji = shuffledTokens[currentIndex];
    const correctText = getText(currentKanji, type);
    const isCorrect = selected === correctText;
    setUserAnswers([...userAnswers, isCorrect]);
    setAnswerResult({ isCorrect, selected });

    setTimeout(() => {
      setAnswerResult(null);
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  if (shuffledTokens.length === 0) {
    return <div>No Kanji available for this type.</div>;
  }

  if (currentIndex < shuffledTokens.length) {
    const currentKanji = shuffledTokens[currentIndex].kanji;
    return (
      <div>
        <div style={{ fontSize: "48px", textAlign: "center", margin: "20px" }}>
          {currentKanji}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {currentOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={answerResult !== null}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor:
                  answerResult && answerResult.selected === option
                    ? answerResult.isCorrect
                      ? "green"
                      : "red"
                    : "#f0f0f0",
                color:
                  answerResult && answerResult.selected === option
                    ? "white"
                    : "black",
                border: "none",
                borderRadius: "5px",
                cursor: answerResult !== null ? "not-allowed" : "pointer",
              }}
            >
              {option}
              {answerResult &&
                answerResult.selected === option &&
                (answerResult.isCorrect ? " O" : " X")}
            </button>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
            color: answerResult
              ? answerResult.isCorrect
                ? "green"
                : "red"
              : "transparent",
            minHeight: "24px",
            opacity: answerResult ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          {answerResult
            ? answerResult.isCorrect
              ? "Correct!"
              : "Incorrect!"
            : " "}
        </div>
      </div>
    );
  } else {
    const correctCount = userAnswers.filter((answer) => answer).length;
    const incorrectCount = userAnswers.length - correctCount;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Quiz Results</h2>
        <p style={{ fontSize: "20px" }}>Correct: {correctCount}</p>
        <p style={{ fontSize: "20px" }}>Incorrect: {incorrectCount}</p>
        <button
          onClick={startQuiz}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Start Over
        </button>
      </div>
    );
  }
};

export default KanjiQuiz;
