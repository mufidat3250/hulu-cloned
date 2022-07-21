import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import request from "./components/Request/Request";
import { Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import { useParams } from "react-router-dom";

// const API_KEY =
function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTopRated);

  console.log(selectedOption, "selected Option");

  // url: `${baseUrl}/movie/${1000139}`,
  // params: {
  //   api_key: import.meta.env.VITE_API__KEY,
  //   append_to_response: "videos",
  // },438148 453395 616037 507086

  console.log({ selectedOption });

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

{
  /* <Content /> */
}
