import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Tables from "./components/Tables";
import LearnTables from "./components/LearnTables";
import PlayTables from "./components/PlayTables";
import Squares from "./components/Squares";
import LearnSquares from "./components/LearnSquares";
import PlaySquares from "./components/PlaySquares";
import Cubes from "./components/Cubes"; // Import Cubes component
import LearnCubes from "./components/LearnCubes"; // Import LearnCubes component
import PlayCubes from "./components/PlayCubes"; // Import PlayCubes component
import AlphabetSeries from "./components/AlphabetSeries"; // Import AlphabetSeries component
import AlphabetSeriesLearn from "./components/AlphabetSeriesLearn"; // Learn section for Alphabet Series
import AlphabetSeriesPlay from "./components/AlphabetSeriesPlay"; // Play section for Alphabet Series
import AlphabetSeriesPlayEasy from "./components/AlphabetSeriesPlayEasy"; // Easy mode
import AlphabetSeriesPlayHard from "./components/AlphabetSeriesPlayHard"; // Hard mode
import AlphabetSeriesPlayMedium from "./components/AlphabetSeriesPlayMedium"; // Medium mode

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/tables/learn" element={<LearnTables />} />
        <Route path="/tables/play" element={<PlayTables />} />
        <Route path="/squares" element={<Squares />} />
        <Route path="/squares/learn" element={<LearnSquares />} />
        <Route path="/squares/play" element={<PlaySquares />} />
        <Route path="/cubes" element={<Cubes />} /> {/* Cubes route */}
        <Route path="/cubes/learn" element={<LearnCubes />} />
        <Route path="/cubes/play" element={<PlayCubes />} />
        <Route path="/alphabet-series" element={<AlphabetSeries />} />{" "}
        {/* Alphabet Series main route */}
        <Route
          path="/alphabet-series/learn"
          element={<AlphabetSeriesLearn />}
        />
        <Route path="/alphabet-series/play" element={<AlphabetSeriesPlay />} />
        <Route
          path="/alphabet-series/play/easy"
          element={<AlphabetSeriesPlayEasy />}
        />
        <Route
          path="/alphabet-series/play/medium"
          element={<AlphabetSeriesPlayMedium />}
        />{" "}
        {/* Medium route */}
        <Route
          path="/alphabet-series/play/hard"
          element={<AlphabetSeriesPlayHard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
