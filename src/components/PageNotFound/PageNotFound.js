import './PageNotFound.css';
import '../Link/Link.css';

function PageNotFound() {
  return (
    <>
      <section className="page-not-found">
        <p className="page-not-found__error-number">404</p>
        <p className="page-not-found__error-text">Страница не найдена</p>
        <a href="" className="page-not-found__back link">Назад</a>
      </section>
    </>
  );
}

export default PageNotFound;
