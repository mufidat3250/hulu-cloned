import { ThumbUpSharp } from "@material-ui/icons";
import React from "react";
import "./VedioCard.css";
import TextTruncate from "react-text-truncate";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = forwardRef(({ movies }, ref) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  return (
    <div
      className="vediocard"
      ref={ref}
      onClick={() => {
        navigate(`/video/${movies.id}`);
      }}
    >
      <div className="img__wrapper">
        <img src={`${baseUrl}${movies.backdrop_path || movies.poster_path}`} />
      </div>
      <TextTruncate
        className="description"
        line={1}
        element="p"
        truncateText="…"
        text={movies.overview}
      />
      <h2 className="title">{movies.original_title || movies.original_name}</h2>
      <p className="likes">
        {movies.media_type && `${movies.media_type} *`}
        <ThumbUpSharp />
        {movies.vote_count}
      </p>
    </div>
  );
});
export default VideoCard;
