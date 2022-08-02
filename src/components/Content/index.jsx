import React, { useEffect, useState } from "react";
import VideoCard from "../VedioCard/Index";
import "./Content.css";
import axios from "axios";
import FlipMove from "react-flip-move";
const baseUrl = "https://api.themoviedb.org/3";

const Content = ({ selectedOption }) => {
  const [movies, Setmovies] = useState([]);
  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios({
      method: "get",
      url: `${baseUrl}${selectedOption}`,
      params: {
        api_key: import.meta.env.VITE_API__KEY,
      },
    });
    Setmovies(results);
  };
  if (!movies) {
    return <p>loading</p>;
  }

  useEffect(() => {
    fetchMovies();
  }, [selectedOption]);
  return (
    <div className="content">
      {" "}
      (
      <FlipMove>
        {movies.map((movies, index) => {
          return <VideoCard key={`movieCard${index}`} movies={movies} />;
        })}
      </FlipMove>
      )
    </div>
  );
};

export default Content;
