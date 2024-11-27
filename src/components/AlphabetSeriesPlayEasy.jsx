import React, { useState } from "react";

const AlphabetSeriesPlayEasy = () => {
  const alphabet = Array.from({ length: 26 }, (_, index) => ({
    letter: String.fromCharCode(65 + index), // A-Z
    number: index + 1, // 1-26
  }));

  const [isPlaying, setIsPlaying] = useState(false);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Store selected answer
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  // Generate a random question asking for the number corresponding to a letter
  const generateQuestion = () => {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const correctAnswer = randomLetter.number;
    setQuestion(`What is the number for letter ${randomLetter.letter}?`);

    // Generate wrong answers
    const wrongAnswers = new Set();

    // Add the +1 and -1 options
    const plusOne = correctAnswer + 1;
    const minusOne = correctAnswer - 1;

    // Ensure we don't add invalid answers (e.g., numbers < 1 or > 26)
    if (plusOne <= 26) wrongAnswers.add(plusOne);
    if (minusOne >= 1) wrongAnswers.add(minusOne);

    // Add one random wrong option between 1 and 26 (excluding the correct answer and the +1/-1)
    while (wrongAnswers.size < 3) {
      const randomOption = Math.floor(Math.random() * 26) + 1;
      if (randomOption !== correctAnswer && !wrongAnswers.has(randomOption)) {
        wrongAnswers.add(randomOption);
      }
    }

    // Convert Set to Array and shuffle
    const allOptions = [correctAnswer, ...Array.from(wrongAnswers)];
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

    setOptions(shuffledOptions);
    setAnswer(correctAnswer);
  };

  // Handle start of the game
  const startGame = () => {
    setIsPlaying(true);
    generateQuestion();
  };

  // Handle answer selection and check if it's correct or wrong
  const handleOptionSelect = (selectedOption) => {
    setSelectedAnswer(selectedOption); // Store selected answer
    const correct = selectedOption === answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1); // Increase score for correct answer
    }

    setTimeout(() => {
      generateQuestion(); // Generate the next question after a short delay
      setSelectedAnswer(null); // Reset selected answer after question change
      setIsCorrect(null); // Reset the answer feedback
    }, 1000); // Delay of 1 second before generating the next question
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-pink-500 to-yellow-400 px-4 py-8">
      <h1 className="mb-8 text-center text-5xl font-extrabold text-white drop-shadow-lg">
        Alphabet Series: Play Easy
      </h1>

      {!isPlaying ? (
        // Start screen
        <div className="w-full max-w-lg transform rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 shadow-2xl transition hover:scale-105">
          <button
            onClick={startGame}
            className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-3 text-lg font-bold text-yellow-900 shadow-lg transition duration-300 hover:bg-yellow-500 hover:shadow-xl"
          >
            Start Game
          </button>
        </div>
      ) : (
        // Game in progress
        <div className="w-full max-w-lg transform rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 p-8 text-center shadow-2xl transition hover:scale-105">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Question: {question}
          </h2>

          {/* Displaying Multiple Choices as Rounded Buttons */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {options.map((option, index) => {
              const isOptionSelected = option === selectedAnswer;
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full transform rounded-lg px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 ${
                    // Highlight the selected answer only
                    isOptionSelected
                      ? option === answer
                        ? "bg-green-600 shadow-lg hover:bg-green-700" // Correct answer
                        : "bg-red-600 shadow-lg hover:bg-red-700" // Wrong answer
                      : "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:via-teal-600 hover:to-blue-600"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {isCorrect !== null && (
            <div
              className={`mt-4 text-xl font-bold ${isCorrect ? "text-green-600" : "text-red-600"}`}
            >
              {isCorrect ? "Correct!" : "Wrong! Try again."}
            </div>
          )}

          <div className="mt-6 text-xl font-semibold text-white">
            Score: {score}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphabetSeriesPlayEasy;