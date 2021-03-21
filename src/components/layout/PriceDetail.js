import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const PriceDetail = ({ item }) => {
  const { name, quantity, price } = item;
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`price-detail ${darkTheme ? "dark-detail" : ""} `}>
      <div className="price-detail__name">
        <p>{name}</p>
      </div>
      <div className="price-detail__info">
        <p>{quantity}</p>
        <p>&pound; {price.toFixed(2)} </p>
        <p>&pound; {(price * quantity).toFixed(2)} </p>
      </div>
    </div>
  );
};

PriceDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

PriceDetail.defaultProps = {
  item: {},
};

export default PriceDetail;
