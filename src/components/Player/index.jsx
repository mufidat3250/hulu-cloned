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
    return (
      <div className="loader_container">
        <div className="loading"></div>
      </div>
    );
  }

  const renderTrailer = () => {
    const trailerVid = singleMovie?.videos.results.find(
      ({ type }) => type === "Trailer"
    );
    const trailerDetails = singleMovie.videos.results[0];
    console.log(trailerDetails);
    return (
      <>
        <div className="video">
          <YouTube
            videoId={trailerVid.key}
            containerClassName={"youtube-container"}
            opts={{ width: "100%", height: "500px" }}
          />
        </div>
        <div className="suggestedVideos">
          <span className="title">{singleMovie.original_title}</span>
          <div className="overview">
            <i>{singleMovie.overview}</i>
          </div>
          <div className="attribute">
            <p className="group">
              {" "}
              <strong>Gengres:</strong>
              <span className="genres">
                {singleMovie.genres.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </span>
            </p>
            <p className="group">
              {" "}
              <strong> Spoken Language: </strong>
              <span className="genres">
                {singleMovie.spoken_languages[0].english_name}
              </span>
            </p>
            <p className="group">
              {" "}
              <strong>Popularity: </strong>
              <span className="genres">{singleMovie.popularity}</span>
            </p>
            <p className="group">
              {" "}
              <strong>Revenue: </strong>
              <span className="genres">{singleMovie.revenue}</span>
            </p>
            <p className="group">
              {" "}
              <strong>Popularity: </strong>
              <span className="genres">{singleMovie.popularity}</span>
            </p>
            <p className="group">
              {" "}
              <strong>Tagline: </strong>
              <span className="genres">{singleMovie.tagline}</span>
            </p>
          </div>
        </div>
      </>
    );
  };

  renderTrailer();
  return <div>{singleMovie.videos ? renderTrailer() : null}</div>;
};

export default Player;
