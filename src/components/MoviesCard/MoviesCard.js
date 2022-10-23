import './MoviesCard.css';
import '../Link/Link.css';
import moviesCardLike from '../../images/moviescard-like.svg';
import moviesCardIsLiked from '../../images/moviescard-isliked.svg';
import moviesCardDislikeMySavedMovie from '../../images/moviescard-dislike-saved-movie.svg';
import { MOVIES_URL } from "../../utils/constants";

export default function MoviesCard({ movie, isTypeSavedMovies, onToggleLike }) {

  const url = (isTypeSavedMovies)
    ? movie.image
    : MOVIES_URL.slice(0, MOVIES_URL.lastIndexOf('/')) + movie.image.url;

  const minutes = movie.duration;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hStr = (h > 0) ? `${h}ч ` : '';
  const mStr = (m > 0) ? `${m}м` : '';
  const duration = hStr + mStr;

  const likeImage = (isTypeSavedMovies)
    ? moviesCardDislikeMySavedMovie
    : ((movie.isLiked) ? moviesCardIsLiked : moviesCardLike);

  const id = (isTypeSavedMovies)
    ? movie.movieId
    : movie.id;

  const handleToggleLike = () => {
    onToggleLike(id);
  }

  return (
    <>

      <a
        href={movie.trailerLink}
        target="_blank"
        aria-label="Cсылка на трейлер"
        className="movies-card__img-link link"
        rel="noreferrer"
      >
        <img
          src={url}
          alt={`Изображение фильма ${movie.nameRU}`}
          className="movies-card__img"
        />
      </a>

      <div className="movies-card__description">
        <h3 className="movies-card__title">{movie.nameRU}</h3>
        <button
          type="button"
          aria-label="добавить в избранное"
          className="movies-card__like link"
          onClick={handleToggleLike}
          style = {{ backgroundImage: `url(${likeImage})`}}
        >
        </button>
      </div>
      <div className="movies-card__line"></div>
      <p className="movies-card__duration">{duration}</p>
    </>
  );
}
