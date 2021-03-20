import CustomButton from "./CustomButton";
import PlusSign from "../../assets/icon-plus.svg";
import Arrow from "../../assets/icon-arrow-down.svg";
import { InvoiceContext } from "../../context/InvoiceContext";
import { ThemeContext } from "../../context/ThemeContext";
import { InvoiceCreateContext } from "../../context/InvoiceCreateContext";
import { useContext, useState } from "react";

const Header = () => {
  const { invoices } = useContext(InvoiceContext);
  const { darkTheme } = useContext(ThemeContext);
  const { toggleInvoice } = useContext(InvoiceCreateContext);

  const [options, setOptions] = useState(false);

  const showOptions = () => setOptions(!options);

  return (
    <header className={`header ${darkTheme ? "dark-header" : ""}`}>
      <div className="header__text">
        <h1>Invoices</h1>
        {invoices && invoices.length >= 1 ? (
          <p> There are {invoices.length} total invoices </p>
        ) : (
          <p> No more invoices! </p>
        )}
      </div>

      <div className="header__filter">
        <div className="header__filter-label" onClick={showOptions}>
          <p className="body-text">Filter by</p>
          <img
            src={Arrow}
            alt="down arrow"
            className={`${options ? "options-open" : ""}`}
          />
        </div>
        {options && (
          <div className="header__filter-items">
            <div className="header__filter-item">
              <input type="checkbox" name="draft" />
              <label htmlFor="draft">Draft</label>
            </div>
            <div className="header__filter-item">
              <input type="checkbox" name="paid" />
              <label htmlFor="paid">Paid</label>
            </div>
            <div className="header__filter-item">
              <input type="checkbox" name="pending" />
              <label htmlFor="pending">Pending</label>
            </div>
          </div>
        )}
      </div>

      <div className="header__cta">
        <CustomButton
          userIcon={PlusSign}
          buttonText="new invoice"
          customClassName="btn__primary"
          buttonEvent={toggleInvoice}
        />
      </div>
    </header>
  );
};

export default Header;
