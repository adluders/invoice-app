import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import SideBar from "./components/layout/Sidebar";
import { ThemeContext } from "./context/ThemeContext";
import { InvoiceCreateContext } from "./context/InvoiceCreateContext";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import { InvoiceDeleteContext } from "./context/InvoiceDeleteContext";

const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { creatingInvoice } = useContext(InvoiceCreateContext);
  const { invoiceDelete } = useContext(InvoiceDeleteContext);

  useEffect(() => {
    if (creatingInvoice || invoiceDelete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [creatingInvoice, invoiceDelete]);

  return (
    <main className={` ${darkTheme ? "dark-mode" : "light-mode"} `}>
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/invoice/:invoiceId" component={Invoice} />
      </Switch>
    </main>
  );
};

export default App;
