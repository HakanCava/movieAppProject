import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="flex flex-wrap">

      <div
        className="movie"
        id="container"
        onClick={() =>currentUser?(navigate(`/details/${id}`)):(navigate("/login"))}
      >
        <img
          // className="h-auto max-w-full rounded-lg "
          loading="lazy"
          src={poster_path ? IMG_API + poster_path : defaultImage}
          alt={title}
        />
        <div className="flex justify-between mt-2 ml-2">
          {currentUser && (
            <> <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
            
          </span></>
           
            
          )}
        </div>
        <div className="movie-over ">
          <h2 className="text-red-800">{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
