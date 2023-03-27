import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";

const Trends = () => {
  const { movies } = useMovieContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  console.log(movies);
  const trendMovie = movies.filter((movie) => movie.vote_average >= 7.2);
  console.log(trendMovie);
  return (
    <>
      {!currentUser && (
        <div className="container mx-auto my-5  flex flex-col justify-center items-center p-5 gap-5 text-xl	text-red-600 font-semibold bg-red-200 ">
          <h1 className="">please login</h1>
          <button type="button"  className="btn-danger-bordered bg-blue-900  mb-5 text-black w-[150px] " onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      )}
      {currentUser && (
        <>
        
          <div className="flex flex-wrap justify-center mt-3 mb-10">
            {trendMovie.map((movie) => (
              <MovieCard {...movie} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-3 mb-10">
          
            <button
              className="btn-danger-bordered bg-blue-900  mb-5 text-black"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Trends;
