import './Portfolio.css';
import '../Link/Link.css';

function Portfolio() {
  return (
    <section className="portfolio">

      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a className="portfolio__item-type link"
             href="https://alexey-saharov.github.io/how-to-learn/"
             target="_blank"
             rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a className="portfolio__arrow link"
             href="https://alexey-saharov.github.io/how-to-learn/"
             target="_blank"
             rel="noreferrer"
          >
            ↗
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio__item-type link"
             href="https://alexey-saharov.github.io/russian-travel/"
             target="_blank"
             rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a className="portfolio__arrow link"
             href="https://alexey-saharov.github.io/russian-travel/"
             target="_blank"
             rel="noreferrer"
          >
            ↗
          </a>
        </li>

        <li className="portfolio__item">
          <a className="portfolio__item-type link"
            href="https://mesto.lexasaharov.nomoredomains.sbs/"
            target="_blank"
             rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a className="portfolio__arrow link"
             href="https://mesto.lexasaharov.nomoredomains.sbs/"
             target="_blank"
             rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ul>

    </section>
  );
}

export default Portfolio;
