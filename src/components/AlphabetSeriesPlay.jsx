import React from "react";
import { useNavigate } from "react-router-dom";

const AlphabetSeriesPlay = () => {
  const navigate = useNavigate(); // Navigation hook

  const options = [
    { name: "Easy", path: "/alphabet-series/play/easy" },
    { name: "Medium", path: "/alphabet-series/play/medium" }, // Added Medium option
    { name: "Hard", path: "/alphabet-series/play/hard" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-400 to-pink-600 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Alphabet Series: Play
      </h1>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => navigate(option.path)} // Navigate to the selected difficulty level
            className="transform rounded-lg bg-white px-6 py-4 font-semibold text-pink-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlphabetSeriesPlay;
