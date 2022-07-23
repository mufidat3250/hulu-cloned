import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import request from "./components/Request/Request";
import { Route, Routes } from "react-router-dom";
import Player from "./components/Player";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTopRated);

  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Routes>
        <Route path="/" element={<Content selectedOption={selectedOption} />} />
        <Route
          path="/video/:id"
          element={<Player selectedOption={selectedOption} />}
        />
      </Routes>
    </div>
  );
}

export default App;

