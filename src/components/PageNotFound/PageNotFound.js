import './PageNotFound.css';
import '../Link/Link.css';

export default function PageNotFound({ onLinkClick }) {
  return (
    <>
      <section className="page-not-found">
        <p className="page-not-found__error-number">404</p>
        <p className="page-not-found__error-text">Страница не найдена</p>
        <a
          href="/"
          className="page-not-found__back link"
          onClick={e => {onLinkClick(e, '/')}}
        >
          Назад
        </a>
      </section>
    </>
  );
}
