import { Link } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies?.map((movie) => {
        return (
          <li className={s["list-item"]} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
