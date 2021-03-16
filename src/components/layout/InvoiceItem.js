import { useContext } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/icon-arrow-right.svg";
import { ThemeContext } from "../../context/ThemeContext";

const InvoiceItem = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status } = invoice;
  const { darkTheme } = useContext(ThemeContext);
  return (
    <Link
      to={`/invoice/${id}`}
      className={`invoice ${darkTheme ? "dark-invoice" : ""}`}
    >
      <div>
        <p>{id}</p>
      </div>
      <div>
        <p>Due {new Date(paymentDue).toLocaleDateString()}</p>
      </div>
      <div>
        <p>{clientName}</p>
      </div>
      <div>
        <p>&pound; {total.toFixed(2)}</p>
      </div>
      <div
        className={`invoice__status ${status === "paid" ? "paid" : ""} ${
          status === "pending" ? "pending" : ""
        } ${status === "draft" ? "draft" : ""}`}
      >
        <p>{status}</p>
      </div>
      <div>
        <p>
          <img src={RightArrow} alt="arrow for details" />
        </p>
      </div>
    </Link>
  );
};

export default InvoiceItem;
