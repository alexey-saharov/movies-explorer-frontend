import './Promo.css';
import webWorld from '../../images/promo-web-world.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__items">
        <div className="promo__image" style = {{ backgroundImage: `url(${webWorld})`}}></div>
        <div className="promo__description">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__link link" href="#AboutProject">Узнать больше</a>
        </div>
      </div>

    </section>
  );
}

export default Promo;
