import './Footer.css';

function Footer() {
  return (

    <section className="footer">

      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>

      <div className="footer__items">
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/" target="_blank">Github</a>
        </div>

        <p className="footer__copyright">&#169;2022</p>
      </div>

    </section>
  );
}

export default Footer;
