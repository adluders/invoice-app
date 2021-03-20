import PropTypes from "prop-types";
import { useContext } from "react";
import { InvoiceDeleteContext } from "../../context/InvoiceDeleteContext";
import { InvoiceContext } from "../../context/InvoiceContext";
import { ThemeContext } from "../../context/ThemeContext";

import CustomButton from "./CustomButton";

const StatusBar = ({ invoice }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { initDelete } = useContext(InvoiceDeleteContext);
  const { markPaid } = useContext(InvoiceContext);
  const { status } = invoice;

  return (
    <div className={`status-bar ${darkTheme ? "dark-status" : ""}`}>
      <div className="status-bar__status">
        <p>status</p>
        <p
          className={`invoice__status ${status === "paid" ? "paid" : ""} ${
            status === "pending" ? "pending" : ""
          } ${status === "draft" ? "draft" : ""}`}
        >
          {status}
        </p>
      </div>
      <div className="status-bar__btns">
        <CustomButton
          buttonText="edit"
          customClassName={`${darkTheme ? "btn__light-dm" : "btn__light-lm"}`}
        />
        <CustomButton
          buttonText="delete"
          buttonEvent={initDelete}
          customClassName="btn__secondary"
        />
        <CustomButton
          buttonText="mark as paid"
          customClassName={`btn__primary ${
            status === "paid" && "disabled-btn"
          }`}
          buttonEvent={() => markPaid(invoice)}
        />
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  invoice: PropTypes.object.isRequired,
};

StatusBar.defaultProps = {
  invoice: {},
};

export default StatusBar;
