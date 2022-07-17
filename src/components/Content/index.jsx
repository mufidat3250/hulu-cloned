import React, { useEffect, useState } from "react";
import VedioCard from "../VedioCard/Index";
import "./Content.css";
import axios from "axios";
import FlipMove from "react-flip-move";
const baseUrl = "https://api.themoviedb.org/3";

const Content = ({ selectedOption }) => {
  const [movies, Setmovies] = useState([]);

  console.log(movies);
  const fetchData = async () => {
    const {
      data: { results },
    } = await axios({
      method: "get",
      url: `${baseUrl}${selectedOption}`,
      params: {
        api_key: import.meta.env.VITE_API__KEY,
      },
    });
    console.log({ results }, "changed result");
    Setmovies(results);
  };

  useEffect(() => {
    fetchData();
  }, [selectedOption]);
  return (
    <div className="content">
      <FlipMove>
        {movies.map((movies, index) => (
          <VedioCard key={`movieCard${index}`} movies={movies} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Content;
