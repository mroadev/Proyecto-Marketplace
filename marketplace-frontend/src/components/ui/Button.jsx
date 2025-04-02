import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
