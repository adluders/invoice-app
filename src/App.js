import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import SideBar from "./components/layout/Sidebar";
import { ThemeContext } from "./context/ThemeContext";
import { InvoiceCreateContext } from "./context/InvoiceCreateContext";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";

const App = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { creatingInvoice } = useContext(InvoiceCreateContext);

  useEffect(() => {
    if (creatingInvoice) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [creatingInvoice]);

  return (
    <main className={` ${darkTheme ? "dark-mode" : "light-mode"} `}>
      <SideBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/invoice/:id" component={Invoice} />
      </Switch>
    </main>
  );
};

export default App;
