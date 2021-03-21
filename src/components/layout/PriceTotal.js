import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../context/ThemeContext";

const PriceTotal = ({ items }) => {
  const prices = items && items.map((item) => item.price);

  const total = prices && prices.reduce((acc, curr) => acc + curr);

  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={`price-total ${darkTheme ? "dark-total" : ""}`}>
      <div className="invoice-container">
        <p>Amount Due</p>
        <p>&pound; {total && total.toFixed(2)} </p>
      </div>
    </div>
  );
};

PriceTotal.propTypes = {
  items: PropTypes.array.isRequired,
};

export default PriceTotal;
