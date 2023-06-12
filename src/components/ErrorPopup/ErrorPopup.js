import './ErrorPopup.css';
import errorImg from "../../images/error-popup.svg";

export default function ErrorPopup({ isOpen, message, onClose }) {
  const classNamePopup = `error-popup ${isOpen && 'error-popup_is-opened'}`;

  return (
    <section className={classNamePopup} onClick={onClose}>
      <div className="error-popup__container" onClick={(e)=>{e.stopPropagation ()}}>
        <button type="button" aria-label="закрыть" className="error-popup__button-close" onClick={onClose}></button>
        <div className="error-popup__image" style = {{ backgroundImage: `url(${errorImg})` }}></div>
        <span className="error-popup__text">{message}</span>
      </div>
    </section>
  );
}
