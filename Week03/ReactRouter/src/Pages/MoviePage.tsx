import { useEffect, useState } from "react";
import type { Movie, MovieResponse } from "../types/movie";
import axios from "axios";

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get<MovieResponse>(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-400 m-10 py-5 px-10 grid grid-cols-6 gap-x-7 gap-y-6">
      {movies.map((movie) => (
        <div key={movie.id} className="relative group">
          {movie.poster_path && (
            <>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-2xl transition duration-300 group-hover:blur-[3px]"
              />
              <div
                className="
              absolute inset-0 flex p-5 justify-center
              text-white text-center bg-black/20
              opacity-0 group-hover:opacity-100 overflow-auto rounded-2xl
            "
              >
                <div>
                  <div className="text-xl font-bold my-5">{movie.title}</div>
                  {movie.overview}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
