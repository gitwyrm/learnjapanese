import React, { useState, useEffect } from "react";

const hiragana = [
  { symbol: "あ", sound: "a" },
  { symbol: "い", sound: "i" },
  { symbol: "う", sound: "u" },
  { symbol: "え", sound: "e" },
  { symbol: "お", sound: "o" },
  { symbol: "か", sound: "ka" },
  { symbol: "き", sound: "ki" },
  { symbol: "く", sound: "ku" },
  { symbol: "け", sound: "ke" },
  { symbol: "こ", sound: "ko" },
  { symbol: "さ", sound: "sa" },
  { symbol: "し", sound: "shi" },
  { symbol: "す", sound: "su" },
  { symbol: "せ", sound: "se" },
  { symbol: "そ", sound: "so" },
  { symbol: "た", sound: "ta" },
  { symbol: "ち", sound: "chi" },
  { symbol: "つ", sound: "tsu" },
  { symbol: "て", sound: "te" },
  { symbol: "と", sound: "to" },
  { symbol: "な", sound: "na" },
  { symbol: "に", sound: "ni" },
  { symbol: "ぬ", sound: "nu" },
  { symbol: "ね", sound: "ne" },
  { symbol: "の", sound: "no" },
  { symbol: "は", sound: "ha" },
  { symbol: "ひ", sound: "hi" },
  { symbol: "ふ", sound: "fu" },
  { symbol: "へ", sound: "he" },
  { symbol: "ほ", sound: "ho" },
  { symbol: "ま", sound: "ma" },
  { symbol: "み", sound: "mi" },
  { symbol: "む", sound: "mu" },
  { symbol: "め", sound: "me" },
  { symbol: "も", sound: "mo" },
  { symbol: "や", sound: "ya" },
  { symbol: "ゆ", sound: "yu" },
  { symbol: "よ", sound: "yo" },
  { symbol: "ら", sound: "ra" },
  { symbol: "り", sound: "ri" },
  { symbol: "る", sound: "ru" },
  { symbol: "れ", sound: "re" },
  { symbol: "ろ", sound: "ro" },
  { symbol: "わ", sound: "wa" },
  { symbol: "を", sound: "wo" },
  { symbol: "ん", sound: "n" },
];

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

const HiraganaQuiz = () => {
  const [shuffledHiragana, setShuffledHiragana] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResult, setAnswerResult] = useState(null);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [japaneseVoice, setJapaneseVoice] = useState(null);

  const startQuiz = () => {
    const shuffled = [...hiragana].sort(() => Math.random() - 0.5);
    setShuffledHiragana(shuffled);
    setCurrentIndex(0);
    setUserAnswers([]);
    setAnswerResult(null);
  };

  // Load available voices and select a Japanese one
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const japanese = voices.find((voice) => voice.lang.startsWith("ja"));
      setJapaneseVoice(japanese || null);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (shuffledHiragana.length > 0 && currentIndex < shuffledHiragana.length) {
      const correctSound = shuffledHiragana[currentIndex].sound;
      const otherIndices = getRandomIndices(
        currentIndex,
        2,
        shuffledHiragana.length,
      );
      const incorrectSounds = otherIndices.map(
        (index) => shuffledHiragana[index].sound,
      );
      const options = [correctSound, ...incorrectSounds].sort(
        () => Math.random() - 0.5,
      );
      setCurrentOptions(options);
    }
  }, [currentIndex, shuffledHiragana]);

  const handleAnswer = (selected) => {
    const correctSound = shuffledHiragana[currentIndex].sound;
    const currentSymbol = shuffledHiragana[currentIndex].symbol; // Get the Hiragana symbol
    const isCorrect = selected === correctSound;
    setUserAnswers([...userAnswers, isCorrect]);
    setAnswerResult({ isCorrect, selected });

    // If correct and TTS is supported, speak the Hiragana symbol
    if (isCorrect && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(currentSymbol); // Use symbol instead of sound
      if (japaneseVoice) {
        utterance.voice = japaneseVoice;
      }
      window.speechSynthesis.speak(utterance);
    }

    setTimeout(() => {
      setAnswerResult(null);
      setCurrentIndex(currentIndex + 1);
    }, 1000);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  if (currentIndex < shuffledHiragana.length) {
    const currentSymbol = shuffledHiragana[currentIndex].symbol;
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
                (answerResult.isCorrect ? " X" : " O")}
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

export default HiraganaQuiz;
