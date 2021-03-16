import { createContext, useState } from "react";

export const InvoiceCreateContext = createContext();

const InvoiceCreateContextProvider = ({ children }) => {
  const [creatingInvoice, setCreatingInvoice] = useState(false);

  const toggleInvoice = () => setCreatingInvoice(!creatingInvoice);

  return (
    <InvoiceCreateContext.Provider value={{ creatingInvoice, toggleInvoice }}>
      {children}
    </InvoiceCreateContext.Provider>
  );
};

export default InvoiceCreateContextProvider;
