import React from "react";

const Tables = () => {
  const options = [
    { name: "Learn", path: "/tables/learn" },
    { name: "Play", path: "/tables/play" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-400 to-teal-600 px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Tables
      </h1>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => (window.location.href = option.path)}
            className="transform rounded-lg bg-white px-6 py-4 font-semibold text-teal-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tables;
