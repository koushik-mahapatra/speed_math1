import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const options = [
    { name: "Alphabet Series", path: "/alphabet-series" },
    { name: "Tables", path: "/tables" },
    { name: "Square", path: "/squares" },
    { name: "Cubes", path: "/cubes" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 px-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-white md:text-6xl">
        Speed Math
      </h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => navigate(option.path)} // Use navigate to handle routing
            className="transform rounded-lg bg-white px-6 py-4 font-semibold text-indigo-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
