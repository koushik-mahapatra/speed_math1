import React, { useState } from "react";

const PlaySquares = () => {
  const [startNum, setStartNum] = useState("");
  const [endNum, setEndNum] = useState("");
  const [number, setNumber] = useState(null);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  // Generate a random square question with multiple options within the specified range
  const generateQuestion = () => {
    const num =
      Math.floor(Math.random() * (parseInt(endNum) - parseInt(startNum) + 1)) +
      parseInt(startNum);
    const correctAnswer = num * num; // Square of the number
    setQuestion(`${num}² = ?`);

    // Generate 3 wrong answers by adding or subtracting small numbers
    let wrongAnswers = new Set();
    const possibleOffsets = [1, 2, 3, 4, 5, 10]; // Offsets to modify the correct answer
    while (wrongAnswers.size < 3) {
      const offset =
        possibleOffsets[Math.floor(Math.random() * possibleOffsets.length)];
      const randomDirection = Math.random() > 0.5 ? 1 : -1; // Randomly decide to add or subtract
      const wrongAnswer = correctAnswer + randomDirection * offset;
      if (wrongAnswer !== correctAnswer && wrongAnswer > 0) {
        wrongAnswers.add(wrongAnswer);
      }
    }

    // Convert Set to Array and shuffle
    const allOptions = [correctAnswer, ...Array.from(wrongAnswers)];
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

    setOptions(shuffledOptions);
  };

  // Handle start number input change
  const handleStartInputChange = (e) => {
    setStartNum(e.target.value);
  };

  // Handle end number input change
  const handleEndInputChange = (e) => {
    setEndNum(e.target.value);
  };

  // Handle answer selection and check if it's correct or wrong
  const handleOptionSelect = (selectedOption) => {
    const correctAnswer =
      parseInt(question.split("² =")[0]) * parseInt(question.split("² =")[0]);

    // Check if the selected answer is correct
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1); // Increase score for correct answer
    } else {
      setIsCorrect(false);
    }

    setAnswer(selectedOption); // Set the selected answer
    setTimeout(() => {
      // Generate the next question after a short delay
      generateQuestion();
      setIsCorrect(null); // Reset the answer feedback
    }, 1000); // Delay of 1 second before generating the next question
  };

  // Start the game by generating the first question
  const startGame = () => {
    // Ensure the start and end numbers are valid
    if (
      startNum &&
      endNum &&
      !isNaN(startNum) &&
      !isNaN(endNum) &&
      parseInt(startNum) <= parseInt(endNum)
    ) {
      // Valid input, proceed with the game
      setNumber(true); // Set the number to initiate the game
      generateQuestion(); // Generate the first question
    } else {
      alert("Please enter valid number ranges!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-pink-500 to-yellow-400 px-4 py-8">
      <h1 className="mb-8 text-center text-5xl font-extrabold text-white drop-shadow-lg">
        Play Squares
      </h1>

      {!number ? (
        // Input for start and end numbers
        <div className="w-full max-w-lg transform rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 shadow-2xl transition hover:scale-105">
          <label className="mb-4 block text-center text-2xl font-bold text-white">
            Enter the Range to Play:
          </label>
          <div className="flex gap-4">
            <input
              type="number"
              value={startNum}
              onChange={handleStartInputChange}
              placeholder="From"
              className="w-1/2 rounded-full bg-gray-50 bg-opacity-80 px-6 py-3 text-center text-lg text-gray-900 shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300"
              min="1"
            />
            <input
              type="number"
              value={endNum}
              onChange={handleEndInputChange}
              placeholder="To"
              className="w-1/2 rounded-full bg-gray-50 bg-opacity-80 px-6 py-3 text-center text-lg text-gray-900 shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300"
              min="1"
            />
          </div>
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

          {/* Displaying Multiple Choices as Rounded Buttons in Single Line on Mobile */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full transform rounded-lg px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 ${
                  isCorrect === true && option === answer
                    ? "bg-green-600 shadow-lg hover:bg-green-700"
                    : isCorrect === false && option === answer
                      ? "bg-red-600 shadow-lg hover:bg-red-700"
                      : "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-cyan-600 hover:via-teal-600 hover:to-blue-600"
                }`}
              >
                {option}
              </button>
            ))}
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

export default PlaySquares;
