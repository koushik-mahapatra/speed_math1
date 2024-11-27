import React, { useState } from "react";

const AlphabetSeriesLearn = () => {
  // Create an array with letters and corresponding numbers
  const alphabet = Array.from({ length: 26 }, (_, index) => ({
    letter: String.fromCharCode(65 + index), // Get letter using ASCII code (65 = 'A')
    number: index + 1,
  }));

  // State to track the selected letter
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Function to handle the letter click
  const handleLetterClick = (letter, number) => {
    setSelectedLetter({ letter, number });
  };

  // Function to close the card
  const closeCard = () => {
    setSelectedLetter(null);
  };

  // Function to close the card if clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      closeCard();
    }
  };

  // Find opposite letter
  const getOppositeLetter = (letter) => {
    const oppositeIndex = 25 - (letter.charCodeAt(0) - 65); // 65 is 'A'
    return String.fromCharCode(65 + oppositeIndex);
  };

  // Find opposite number
  const getOppositeNumber = (number) => {
    return 27 - number; // 27 - number gives the opposite
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Alphabet Series: Learn
      </h1>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {alphabet.map(({ letter, number }) => (
          <div
            key={letter}
            onClick={() => handleLetterClick(letter, number)} // Handle click
            className="relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg"
          >
            {/* Letter Box */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-red-500">
                {letter}
              </span>
              <span className="text-4xl font-extrabold text-yellow-500">
                {number}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (Card) */}
      {selectedLetter && (
        <div
          className="modal-background fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOutsideClick} // Close modal if clicked outside
        >
          <div className="relative flex h-80 w-96 rounded-lg bg-teal-100 p-4 shadow-xl">
            {/* Left side - Letter and Number */}
            <div className="flex flex-1 flex-col items-center justify-center bg-purple-400 p-4 ">
              <span className="text-9xl font-extrabold text-lime-500">
                {selectedLetter.letter}
              </span>
              <span className="text-9xl font-extrabold text-purple-700">
                {selectedLetter.number}
              </span>
            </div>

            {/* Right side - Opposite Letter and Number */}
            <div className="flex flex-1 flex-col items-center justify-center bg-indigo-400 p-4 text-white">
              <span className="text-9xl font-extrabold text-green-400">
                {getOppositeLetter(selectedLetter.letter)}
              </span>
              <span className="text-9xl font-extrabold text-purple-700">
                {getOppositeNumber(selectedLetter.number)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphabetSeriesLearn;
