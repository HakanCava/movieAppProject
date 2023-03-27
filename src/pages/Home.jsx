import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { useAuthContext } from "../context/AuthContext";
import { useMovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Home = () => {
  const { movies, loading, getMovies } = useMovieContext();
  const { currentUser } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentUser&&searchTerm){
      getMovies(SEARCH_API+searchTerm)
    }else if(!currentUser){
      toastWarnNotify("please log in to search a movie")
      navigate("/login")
    }else{
      toastWarnNotify("please enter a text")
    }
    setSearchTerm("")
  };
  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2 border-gray-400 text-black"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex items-center justify-center p-4 md:py-8 flex-wrap bg-slate-300 mb-[30px]">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 text-xl"
          onClick={()=>navigate("/")}
        >
          All
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-400 rounded-full  px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 text-xl"
          onClick={()=>navigate("/trends")}
        >
          Trends
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-400 rounded-full  px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 text-xl"
          onClick={()=>navigate("/highscore")}
        >
          High Score
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-400 rounded-full px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 text-xl"
          onClick={()=>navigate("/lowscore")}
        >
          Low Score
        </button>
       
      </div>
      <div className="flex justify-center flex-wrap mb-10">
        {loading ? (
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52 ">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.filter((movie)=>movie.title.toLowerCase().includes(searchTerm.trim().toLowerCase())).map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Home;
