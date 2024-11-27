import React, { useState } from "react";

const LearnTables = () => {
  // State to hold the input number, the generated table, and the flag to show the table
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);
  const [showTable, setShowTable] = useState(false);

  // Function to generate the multiplication table for a given number
  const generateTable = (num) => {
    // Initialize an empty array to store the table lines
    const result = [];

    // Loop through 1 to 12 to generate the multiplication results
    for (let i = 1; i <= 12; i++) {
      // Push each multiplication result as a string into the result array
      result.push(`${num} × ${i} = ${num * i}`);
    }
    // Return the generated multiplication table as an array
    return result;
  };

  // Handle changes in the input field (when the user types a number)
  const handleInputChange = (e) => {
    setNumber(e.target.value); // Update the number state with the new value
  };

  // Handle form submission (when the user clicks the "Show Table" button)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submission

    // If the input number is valid (non-empty), generate the table
    if (number) {
      setTable(generateTable(Number(number))); // Generate the table and set it in state
      setShowTable(true); // Show the table by setting the showTable state to true
    }
  };

  // Handle reset action (when the user wants to try another number)
  const handleReset = () => {
    setNumber(""); // Reset the input field to an empty string
    setShowTable(false); // Hide the table by setting the showTable state to false
    setTable([]); // Clear the table data
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-600 to-yellow-500 px-4">
      {/* Title of the page with a pulsing animation */}
      <h1 className="mb-12 animate-pulse text-center text-5xl font-extrabold text-white drop-shadow-lg md:text-6xl">
        Learn Multiplication Tables
      </h1>

      {/* Conditional rendering based on whether the table should be shown */}
      {!showTable ? (
        // Display this form if the table is not yet shown
        <form
          onSubmit={handleSubmit} // Submit the form to generate the table
          className="w-full max-w-lg transform rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 shadow-2xl transition hover:scale-105"
        >
          {/* Label for the input field */}
          <label className="mb-4 block text-center text-2xl font-bold text-white">
            Enter a Number:
          </label>

          {/* Input field for the user to enter a number */}
          <input
            type="number"
            value={number}
            onChange={handleInputChange} // Update the input value in state
            placeholder="e.g., 6"
            className="w-full rounded-full bg-gray-50 bg-opacity-80 px-6 py-3 text-center text-lg text-gray-900 shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300"
            min="1" // Ensure the input is a positive number
          />

          {/* Submit button to show the multiplication table */}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-yellow-400 px-6 py-3 text-lg font-bold text-yellow-900 shadow-lg transition duration-300 hover:bg-yellow-500 hover:shadow-xl"
          >
            Show Table
          </button>
        </form>
      ) : (
        // Display the multiplication table when it's generated
        <div className="w-full max-w-lg transform rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-500 p-8 text-center shadow-2xl transition hover:scale-105">
          {/* Title for the table */}
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            Table of {number}
          </h2>

          {/* List of multiplication results */}
          <ul className="space-y-2 text-lg text-gray-800">
            {table.map((line, index) => {
              const parts = line.split(" = "); // Split the multiplication part and result
              const result = parts[1]; // Get the result (e.g., "18" from "6 × 3 = 18")

              return (
                <li
                  key={index}
                  className="flex items-center justify-center space-x-2 rounded-lg bg-white bg-opacity-40 p-2 font-semibold text-teal-500"
                >
                  <span>{parts[0]} =</span>
                  <span className="rounded-full bg-teal-400 px-4 py-2 font-bold text-white">
                    {result}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Reset button to allow the user to try another number */}
          <button
            onClick={handleReset} // Reset the form and table when clicked
            className="mt-6 rounded-full bg-red-500 px-6 py-2 font-bold text-white shadow-lg transition duration-300 hover:bg-red-600 hover:shadow-xl"
          >
            Try Another Number
          </button>
        </div>
      )}
    </div>
  );
};

export default LearnTables;
