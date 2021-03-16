import { createContext, useState, useEffect } from "react";
import Data from "../data.json";

export const InvoiceContext = createContext();

const InvoiceContextProvider = ({ children }) => {
  const [invoices, setInvoices] = useState();

  function fetchData() {
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
    fetchData();
  }, []);

  return (
    <InvoiceContext.Provider value={{ invoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContextProvider;
