import PropTypes from "prop-types";

const CustomButton = ({
  userIcon,
  buttonText,
  customClassName,
  buttonEvent,
}) => {
  return (
    <button
      onClick={buttonEvent}
      className={`btn ${userIcon ? "has-icon" : ""} ${customClassName}`}
    >
      {userIcon && <img src={userIcon} alt="button icon" />}
      {buttonText}
    </button>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
  buttonEvent: PropTypes.func,
  userIcon: PropTypes.string,
};

CustomButton.defaultProps = {
  buttonText: "",
  customClassName: "",
  userIcon: "",
  buttonEvent: null,
};

export default CustomButton;
