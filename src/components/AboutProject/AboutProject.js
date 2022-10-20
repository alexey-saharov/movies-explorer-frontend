import './AboutProject.css';

export default function AboutProject() {
  return (
    <>
      <a id="AboutProject"></a>
      <section className="about-project">

        <h2 className="about-project__title">О проекте</h2>

        <div className="about-project__line"></div>

        <div className="about-project__content">
          <div className="about-project__stepsCount">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности
              и финальные доработки.</p>
          </div>
          <div className="about-project__workDuration">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.</p>
          </div>
        </div>

        <div className="about-project__steps">
          <div className="about-project__stepBackend">
            1 неделя
          </div>
          <div className="about-project__stepFrontend">
            4 недели
          </div>
          <div className="about-project__stepTitle">
            Back-end
          </div>
          <div className="about-project__stepTitle">
            Front-end
          </div>
        </div>
      </section>
    </>
  );
}
