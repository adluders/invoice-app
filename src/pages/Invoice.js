import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import LeftArrow from "../assets/icon-arrow-left.svg";
import InvoiceDetail from "../components/layout/InvoiceDetail";
import StatusBar from "../components/layout/StatusBar";
import { InvoiceContext } from "../context/InvoiceContext";
import { ThemeContext } from "../context/ThemeContext";

const Invoice = () => {
  let { id } = useParams();
  const { invoices } = useContext(InvoiceContext);
  const { darkTheme } = useContext(ThemeContext);

  let invoice = invoices && invoices.filter((inv) => inv.id === id);

  let invoiceItem = invoice && invoice[0];

  return (
    <section
      className={`container invoice-page ${
        darkTheme ? "dark-invoice__text" : ""
      } `}
    >
      <div className="invoice-page__cta">
        <Link to="/">
          <img src={LeftArrow} alt="go back" />
          Go back
        </Link>
      </div>
      <StatusBar invoice={invoiceItem} />

      <div className="invoice-page__details">
        <InvoiceDetail invoice={invoiceItem} />
      </div>
    </section>
  );
};

export default Invoice;
