import './ErrorPopup.css';

export default function ErrorPopup({ isOpen, message, onClose }) {
  const classNamePopup = `error-popup ${isOpen && 'error-popup_is-opened'}`;

  return (
    <section className={classNamePopup}>
      <div className="error-popup__container">
        <button type="button" aria-label="закрыть" className="error-popup__button-close" onClick={onClose}></button>
        <span className="error-popup__text">{message}</span>
      </div>
    </section>
  );
}
