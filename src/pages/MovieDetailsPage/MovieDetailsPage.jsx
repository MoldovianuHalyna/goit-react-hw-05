import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { oneFilmFetcher } from "../../fetcherApi";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movie = await oneFilmFetcher(movieId);
        setFilm(movie.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (!film) return <p>Movie not found.</p>;
  const releaseYear = new Date(film.release_date).getFullYear();
  const userScore = Math.ceil(film.vote_average);
  return (
    <>
      <div className={s.containerDetails}>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
        />
        <div className={s.description}>
          <h1 className={s.header}>
            {film.title}({releaseYear})
          </h1>

          <p className={s.descriptiontext}>Rating: {userScore} / 10</p>
          <p className={s.descriptiontext}>
            <strong>Overview:</strong> {film.overview}
          </p>
        </div>
      </div>
      <nav className={s.navigation}>
        <Link className={s.link} to="cast">
          Cast
        </Link>
        <Link className={s.link} to="reviews">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
