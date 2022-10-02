import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">

      <h2 className="portfolio__title">Портфолио</h2>

      <div className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__item-type portfolio__link"
             href="https://alexey-saharov.github.io/how-to-learn/"
             target="_blank"
          >
            Статичный сайт
          </a>
          <a className="portfolio__arrow portfolio__link"
             href="https://alexey-saharov.github.io/how-to-learn/"
             target="_blank"
          >
            ↗
          </a>
        </li>

        <div className="portfolio__line"></div>

        <li className="portfolio__item">
          <a className="portfolio__item-type portfolio__link"
             href="https://alexey-saharov.github.io/russian-travel/"
             target="_blank"
          >
            Адаптивный сайт
          </a>
          <a className="portfolio__arrow portfolio__link"
             href="https://alexey-saharov.github.io/russian-travel/"
             target="_blank"
          >
            ↗
          </a>
        </li>

        <div className="portfolio__line"></div>

        <li className="portfolio__item">
          <a className="portfolio__item-type portfolio__link"
            href="https://mesto.lexasaharov.nomoredomains.sbs/sign-in"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <a className="portfolio__arrow portfolio__link"
             href="https://mesto.lexasaharov.nomoredomains.sbs/sign-in"
             target="_blank"
          >
            ↗
          </a>
        </li>
      </div>

    </section>
  );
}

export default Portfolio;
