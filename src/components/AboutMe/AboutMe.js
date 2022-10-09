import './AboutMe.css';
import '../Link/Link.css';

function AboutMe() {
  return (
    <section className="about-me">
     <h2 className="about-me__title">Студент</h2>

      <div className="about-me__line"></div>

      <div className="about-me__content">
        <img className="about-me__photo" src={require('../../images/about-me-photo.jpg')} alt="Портрет автора сайта" />

        <div className="about-me__description">
          <div className="about-me__name">Алексей</div>
          <div className="about-me__about">Веб-разработчик, 39 лет</div>
          <div className="about-me__text">
            Я живу в Тюмени, закончил факультет технической кибернетики ТГНГУ. У меня есть жена и дочь.
            Люблю слушать музыку, увлекаюсь сноубордом. Недавно начал кодить. С 2017 года работаю в компании
            «Газпром недра». После того, как прошёл курс по веб-разработке,
            занимаюсь проектами в компании и фриланс-заказами.
          </div>
          <a
            className="about-me__githubLink link"
            href="https://github.com/alexey-saharov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>

    </section>
  );
}

export default AboutMe;
