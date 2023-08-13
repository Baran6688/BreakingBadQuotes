import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Movies() {
  const movies = useLoaderData();

  return (
    <div className="movies">
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} Directed{" "}
            {movie.Director !== "N/A" && <span> by {movie.Director} </span>} in{" "}
            {movie.Released}
            <Link to={movie.imdbID}>Details </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

export const MoviesLoader = async () => {
  const res = await fetch("http://localhost:3000/films");
  return res.json();
};
