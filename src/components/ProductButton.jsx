import PropTypes from "prop-types";

const ProductButton = ({ name, classname }) => {
  return <button className={classname}>{name}</button>;
};

ProductButton.propTypes = {
  name: PropTypes.string,
  classname: PropTypes.string,
};

export default ProductButton;
