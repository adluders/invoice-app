import { createContext, useState } from "react";

export const InvoiceDeleteContext = createContext();

const InvoiceDeleteContextProvider = ({ children }) => {
  const [invoiceDelete, setInvoiceDelete] = useState(false);

  const initDelete = () => setInvoiceDelete(!invoiceDelete);

  return (
    <InvoiceDeleteContext.Provider
      value={{ invoiceDelete, setInvoiceDelete, initDelete }}
    >
      {children}
    </InvoiceDeleteContext.Provider>
  );
};

export default InvoiceDeleteContextProvider;
