import { Link, useLocation } from "react-router-dom";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies?.map((movie) => {
        return (
          <li className={s["list-item"]} key={movie.id}>
            <Link
              className={s.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <div>
                <img
                  className={s.poster}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className={s.title}>{movie.title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
