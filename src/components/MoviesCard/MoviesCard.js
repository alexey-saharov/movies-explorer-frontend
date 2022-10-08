import './MoviesCard.css';
import moviesCardTestPic from '../../images/moviescard-test-pic.png';
import moviesCardLike from '../../images/moviescard-like.svg';
import moviesCardIsLiked from '../../images/moviescard-isliked.svg';

function MoviesCard() {

  const title = '33 слова о дизайне';
  const isLiked = false;
  const duration = '1ч 42м';

  function handleLikeClick() {

  }

  return (
    <>
      <img src={moviesCardTestPic} alt={'testPic'} className="movies-card__img" />
      <div className="movies-card__description">
        <h3 className="movies-card__title">{title}</h3>
        <button
          aria-label="добавить в избранное"
          className="movies-card__like link"
          onClick={handleLikeClick}
          style = {{ backgroundImage: `url(${(isLiked) ? moviesCardIsLiked : moviesCardLike})`}}
        >
        </button>
      </div>
      <div className="movies-card__line"></div>
      <p className="movies-card__duration">{duration}</p>
    </>
  );
}

export default MoviesCard;
