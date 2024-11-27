import React from "react";
import { useNavigate } from "react-router-dom";

const Cubes = () => {
  const navigate = useNavigate(); // Use the hook to navigate between routes

  const options = [
    { name: "Learn", path: "/cubes/learn" },
    { name: "Play", path: "/cubes/play" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Cubes
      </h1>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => navigate(option.path)} // Navigate on click
            className="transform rounded-lg bg-white px-6 py-4 font-semibold text-indigo-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cubes;
