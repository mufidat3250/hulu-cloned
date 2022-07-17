import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import request from "./components/Request/Request";

// const API_KEY =
function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTopRated);

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
      <Content selectedOption={selectedOption} />
    </div>
  );
}

export default App;
