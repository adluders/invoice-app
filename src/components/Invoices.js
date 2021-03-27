import { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";

const Invoices = () => {
  const { invoices } = useContext(InvoiceContext);

  return (
    <div>
      {invoices &&
        invoices.map((invoice) => (
          <InvoiceItem key={invoice.invoiceId} invoice={invoice} />
        ))}
    </div>
  );
};

export default Invoices;
