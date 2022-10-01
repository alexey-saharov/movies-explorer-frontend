import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutMe">
     <h2 className="aboutMe__title">Студент</h2>

      <div className="aboutMe__line"></div>

      <div className="aboutMe__content">
        <img className="aboutMe__photo" src={require('../../images/author_photo.jpg')} alt="Портрет автора сайта" />

        <div className="aboutMe__description">
          <div className="aboutMe__name">Алексей</div>
          <div className="aboutMe__about">Веб-разработчик, 39 лет</div>
          <div className="aboutMe__text">
            Я живу в Тюмени, закончил факультет технической кибернетики ТГНГУ. У меня есть жена и дочь.
            Люблю слушать музыку, увлекаюсь сноубордом. Недавно начал кодить. С 2017 года работаю в компании
            «Газпром недра». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и проектами в компании.
          </div>
          <a className="aboutMe__githubLink" href="https://github.com/alexey-saharov" target="_blank">
            Github
          </a>
        </div>
      </div>


    </section>
  );
}

export default AboutMe;
