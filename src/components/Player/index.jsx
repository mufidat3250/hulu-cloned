import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./PlayerStyle.css";
import YouTube from "react-youtube";

const baseUrl = "https://api.themoviedb.org/3";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

const Player = () => {
  const { id } = useParams();
  const [singleMovie, setSingleMovies] = useState(null);

  const fetchMovie = async () => {
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/movie/${id}`,
      params: {
        api_key: import.meta.env.VITE_API__KEY,
        append_to_response: "videos",
      },
    });
    setSingleMovies(data);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  if (singleMovie === null) {
    return <h1>Loading</h1>;
  }
  console.log(singleMovie, "singleMovies");
  const renderTrailer = () => {
    const trailerVid = singleMovie?.videos.results.find(
      ({ type }) => type === "Trailer"
    );
    const trailerDetails = singleMovie.videos.results[0];
    console.log(trailerDetails);
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${IMAGE_PATH}${singleMovie.backdrop_path}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "60%",
          }}
          className="video"
        >
          <YouTube
            videoId={trailerVid.key}
            containerClassName={"youtube-container"}
            opts={{ width: "100%" }}
          />
        </div>
        <div className="suggestedVideos">
          <h1>{singleMovie.original_title}</h1>
          <i>{singleMovie.overview}</i>
        </div>
      </>
    );
  };

  renderTrailer();
  return <div>{singleMovie.videos ? renderTrailer() : null}</div>;
};

export default Player;
