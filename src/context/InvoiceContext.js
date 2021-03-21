import { createContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import Data from "../data.json";

export const InvoiceContext = createContext();

const InvoiceContextProvider = ({ children, history }) => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices();
  }, []);

  useEffect(() => {
    // everytime invoice array changes, save to local Storage
    localStorage.setItem("invoices", JSON.stringify(Data));
  }, [invoices]);

  const getInvoices = () => {
    if (localStorage.getItem("invoices") === null) {
      // localStorage.setItem("invoices", JSON.stringify([]));
      localStorage.setItem("invoices", JSON.stringify(Data));
    } else {
      let invoiceLocal = JSON.parse(localStorage.getItem("invoices"));
      setInvoices(invoiceLocal);
    }
  };

  const addInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
  };

  const removeInvoice = (invoiceId) => {
    setInvoices(invoices.filter((invoice) => invoice.invoiceId !== invoiceId));
    history.push("/");
  };

  const markPaid = (invoiceToUpdate) => {
    let item = invoices.filter(
      (invoice) => invoice.invoiceId === invoiceToUpdate.invoiceId
    );
    setInvoices([...invoices], (item[0].status = "paid"));
  };

  return (
    <InvoiceContext.Provider
      value={{ invoices, addInvoice, removeInvoice, markPaid }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default withRouter(InvoiceContextProvider);
