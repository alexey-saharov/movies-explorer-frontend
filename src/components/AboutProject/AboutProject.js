import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>

      <div className="aboutProject__line"></div>

      <div className="aboutProject__content">
        <div className="aboutProject__stepsCount">
          <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.</p>
        </div>
        <div className="aboutProject__workDuration">
          <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="aboutProject__steps">
        <div className="aboutProject__stepBackend">
          1 неделя
        </div>
        <div className="aboutProject__stepFrontend">
          4 недели
        </div>
        <div className="aboutProject__stepTitle">
          Back-end
        </div>
        <div className="aboutProject__stepTitle">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
