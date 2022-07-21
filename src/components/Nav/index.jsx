import React from "react";
import Request from "../Request/Request";
import "./Nav.css";

const navData = [
  {
    title: "Trending",
    link: Request.fetchTrending,
  },
  {
    title: "Top Rated",
    link: Request.fetchTopRated,
  },
  {
    title: "Action",
    link: Request.fetchActionMovies,
  },
  {
    title: "Horror",
    link: Request.fetchHorrorMovies,
  },
  {
    title: "Romance",
    link: Request.fetchRomanceMovies,
  },
  {
    title: "Mystery",
    link: Request.fetchMystery,
  },
  {
    title: "Sci-fi",
    link: Request.fetchSciFi,
  },
  {
    title: "Western",
    link: Request.fetchWestern,
  },
  {
    title: "Animation",
    link: Request.fetchAnimation,
  },
  {
    title: "TV Movie",
    link: Request.fetchTV,
  },
];

const Nav = ({ setSelectedOption }) => {
  console.log(setSelectedOption);
  return (
    <div className="nav">
      {navData.map(({ title, link }, index) => {
        return (
          <h2 onClick={() => setSelectedOption(link)} key={`nav${index}`}>
            {title}
          </h2>
        );
      })}

      {/* <h2 onClick={() => setSelectedOption(Request.fetchActionMovies)}>
        Action
      </h2> */}
    </div>
  );
};

export default Nav;
