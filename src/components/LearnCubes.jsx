import React, { useState } from "react";

// Utility function to generate cubes
const generateCubes = (limit) => {
  const cubes = [];
  for (let i = 1; i <= limit; i++) {
    cubes.push({ number: i, cube: i * i * i });
  }
  return cubes;
};

const LearnCubes = () => {
  // Get the screen width
  const isMobile = window.innerWidth <= 640; // Consider mobile screens as width <= 640px

  // Set the number of cubes per page based on screen size
  const cubesPerPage = isMobile ? 10 : 20;

  // Create a list of cubes (1 to 100 for now)
  const cubes = generateCubes(100);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current set of cubes to display
  const startIndex = (currentPage - 1) * cubesPerPage;
  const currentCubes = cubes.slice(startIndex, startIndex + cubesPerPage);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(cubes.length / cubesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-teal-400 to-green-600 px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Learn Cubes
      </h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentCubes.map((item) => (
          <div
            key={item.number}
            className="rounded-lg bg-white p-3 text-center text-teal-600 shadow-md"
          >
            <p className="text-2xl font-bold">
              {item.number}³
              <span className="ml-2 text-3xl font-bold text-yellow-500">{`= ${item.cube}`}</span>{" "}
              {/* Increased font size for result */}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="mt-6 flex w-full max-w-4xl justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="transform rounded-lg bg-white px-6 py-2 font-semibold text-teal-600 shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(cubes.length / cubesPerPage)}
          className="transform rounded-lg bg-white px-6 py-2 font-semibold text-teal-600 shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LearnCubes;
