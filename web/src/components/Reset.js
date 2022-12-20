import "../styles/components/Reset.scss";

const Reset = (props) => {
  return (
    <button
      className="card__button js_reset-btn"
      title="Reset"
      name="Reset"
      type="button"
      onClick={props.event}
    >
      <i className="far fa-trash-alt"></i>
      Reset
    </button>
  );
};
export default Reset;
