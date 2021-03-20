import { createContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import Data from "../data.json";

export const InvoiceContext = createContext();

const InvoiceContextProvider = ({ children, history }) => {
  const [invoices, setInvoices] = useState();

  function getInvoices() {
    // fetch("http://localhost:1337/invoices/", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => setInvoices(data));
    setInvoices(Data);
  }

  useEffect(() => {
    getInvoices();
  }, []);

  const addInvoice = (invoiceData) => {
    setInvoices([...invoices, invoiceData]);
    console.log(`invoices: ${invoices}, data ${invoiceData}`);
    // to be updated to post request w/ strapi
  };

  const removeInvoice = (invoiceId) => {
    setInvoices(invoices.filter((invoice) => invoice.invoiceId !== invoiceId));
    history.push("/");
    // this to be updated to be a delete request w/ Strapi
  };

  const markPaid = (invoiceToUpdate) => {
    // to be updated to put(edit) request w/ strapi
    invoices.map((invoice) =>
      invoice.invoiceId === invoiceToUpdate.invoiceId
        ? (invoiceToUpdate.status = "paid")
        : null
    );
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
