import React, { useState, useEffect, useRef, useCallback } from "react";

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

const Quiz = ({ tokens }) => {
  const [shuffledToken, setShuffledToken] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResult, setAnswerResult] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [japaneseVoice, setJapaneseVoice] = useState(null);
  const voicesLoadedRef = useRef(false);

  const startQuiz = useCallback(() => {
    const shuffled = [...tokens].sort(() => Math.random() - 0.5);
    setShuffledToken(shuffled);
    setCurrentIndex(0);
    setUserAnswers([]);
    setAnswerResult(null);
  }, [tokens]);

  useEffect(() => {
    let isMounted = true;

    const loadVoices = () => {
      if (!isMounted) return;

      const voices = window.speechSynthesis.getVoices();
      const japanese = voices.find((voice) => voice.lang.startsWith("ja"));
      if (japanese) {
        setJapaneseVoice(japanese);
        voicesLoadedRef.current = true;
      }
    };

    loadVoices();

    if (!voicesLoadedRef.current) {
      window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    }

    return () => {
      isMounted = false;
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  const speakJapanese = (text) => {
    if (!("speechSynthesis" in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
      utterance.lang = "ja-JP";
    }

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (shuffledToken.length > 0 && currentIndex < shuffledToken.length) {
      const correctSound = shuffledToken[currentIndex].sound;
      const otherIndices = getRandomIndices(
        currentIndex,
        2,
        shuffledToken.length,
      );
      const incorrectSounds = otherIndices.map(
        (index) => shuffledToken[index].sound,
      );
      const options = [correctSound, ...incorrectSounds].sort(
        () => Math.random() - 0.5,
      );
      setCurrentOptions(options);
    }
  }, [currentIndex, shuffledToken]);

  const handleAnswer = (selected) => {
    const correctSound = shuffledToken[currentIndex].sound;
    const currentSymbol = shuffledToken[currentIndex].symbol;
    const isCorrect = selected === correctSound;
    setUserAnswers([...userAnswers, isCorrect]);
    setAnswerResult({ isCorrect, selected });

    // If correct, speak the token
    if (isCorrect) {
      speakJapanese(currentSymbol);
    }

    setTimeout(() => {
      setAnswerResult(null);
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  if (currentIndex < shuffledToken.length) {
    const currentSymbol = shuffledToken[currentIndex].symbol;
    return (
      <div>
        <div style={{ fontSize: "48px", textAlign: "center", margin: "20px" }}>
          {currentSymbol}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {currentOptions.map((option) => (
            <button
              key={option}
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

export default Quiz;
