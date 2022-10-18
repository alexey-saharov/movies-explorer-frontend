import './MoviesCard.css';
import moviesCardLike from '../../images/moviescard-like.svg';
import moviesCardIsLiked from '../../images/moviescard-isliked.svg';
import moviesCardDislikeMySavedMovie from '../../images/moviescard-dislike-my-saved-movie.svg';
import { MOVIES_URL } from "../../utils/constants";

export function MoviesCard({ movie, isLiked, mySavedMovie }) {

  const url = MOVIES_URL.slice(0, MOVIES_URL.lastIndexOf('/')) + movie.image.url;

  const minutes = movie.duration;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hStr = (h > 0) ? `${h}ч ` : '';
  const mStr = (m > 0) ? `${m}м` : '';
  const duration = hStr + mStr;

  const likeImage = (mySavedMovie)
    ? moviesCardDislikeMySavedMovie
    : ((isLiked) ? moviesCardIsLiked : moviesCardLike);

  const handleLikeClick = () => {

  }

  return (
    <>
      <img src={url} alt={movie.nameRU} className="movies-card__img" />

      <div className="movies-card__description">
        <h3 className="movies-card__title">{movie.nameRU}</h3>
        <button
          type="button"
          aria-label="добавить в избранное"
          className="movies-card__like link"
          onClick={handleLikeClick}
          style = {{ backgroundImage: `url(${likeImage})`}}
        >
        </button>
      </div>
      <div className="movies-card__line"></div>
      <p className="movies-card__duration">{duration}</p>

    </>
  );
}
