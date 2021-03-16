import { createContext, useState, useEffect } from "react";
import Data from "../data.json";

export const InvoiceContext = createContext();

const InvoiceContextProvider = ({ children }) => {
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
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContextProvider;
