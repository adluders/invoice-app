import { useContext } from "react";
import Empty from "../components/Empty";
import Invoices from "../components/Invoices";
import Header from "../components/layout/Header";
import NewInvoice from "../components/NewInvoice";
import { InvoiceContext } from "../context/InvoiceContext";

const Home = () => {
  const { invoices } = useContext(InvoiceContext);
  return (
    <div className="container">
      <Header />
      <NewInvoice />
      {invoices && invoices.length < 1 ? <Empty /> : <Invoices />}
    </div>
  );
};

export default Home;
