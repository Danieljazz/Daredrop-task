import "./errorNotification.scss";

const ErrorNotification = ({ errorMessage, closeModal }) => {
  return (
    <div className="errors">
      <div>{errorMessage}</div>
      <button onClick={() => closeModal(null)}>X</button>
    </div>
  );
};

export default ErrorNotification;
