import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { InvoiceCreateContext } from "../context/InvoiceCreateContext";
import CustomButtom from "./layout/CustomButton";

const NewInvoice = () => {
  const [formResponse, setFormResponse] = useState({
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    clientCity: "",
    clientCode: "",
    clientCountry: "",
    invoiceDate: "",
    projectDesc: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  const updateStreetAddress = (e) => {
    setFormResponse({ ...formResponse, streetAddress: e.target.value });
  };

  const updateCity = (e) =>
    setFormResponse({ ...formResponse, city: e.target.value });

  const updatePostal = (e) =>
    setFormResponse({ ...formResponse, postCode: e.target.value });

  const updateCountry = (e) =>
    setFormResponse({ ...formResponse, country: e.target.value });

  const updateClientName = (e) =>
    setFormResponse({ ...formResponse, clientName: e.target.value });

  const updateClientEmail = (e) =>
    setFormResponse({ ...formResponse, clientEmail: e.target.value });

  const updateClientAddress = (e) =>
    setFormResponse({ ...formResponse, clientAddress: e.target.value });

  const updateClientCity = (e) =>
    setFormResponse({ ...formResponse, clientCity: e.target.value });

  const updateClientCode = (e) =>
    setFormResponse({ ...formResponse, clientCode: e.target.value });

  const updateClientCountry = (e) =>
    setFormResponse({ ...formResponse, clientCountry: e.target.value });

  const updateInvoiceDate = (e) =>
    setFormResponse({ ...formResponse, invoiceDate: e.target.value });

  const updateProjectDesc = (e) =>
    setFormResponse({ ...formResponse, projectDesc: e.target.value });

  const { darkTheme } = useContext(ThemeContext);

  const { creatingInvoice, toggleInvoice } = useContext(InvoiceCreateContext);

  return creatingInvoice ? (
    <section className={`new-invoice ${darkTheme ? "dark-invoice" : ""}`}>
      <div className="new-invoice__container">
        <div className="new-invoice__header">
          <h1>New Invoice</h1>
        </div>

        <form
          action="#"
          className="new-invoice__form"
          onSubmit={handleFormSubmit}
        >
          <p className="invoice-detail__text">bill from</p>
          <div className="new-invoice__form-group">
            <label htmlFor="address">
              Street Address
              <input
                type="text"
                name="address"
                value={formResponse.streetAddress}
                onChange={updateStreetAddress}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="city">
              City
              <input
                type="text"
                name="city"
                value={formResponse.city}
                onChange={updateCity}
              />
            </label>

            <label htmlFor="postal">
              Post Code
              <input
                type="text"
                name="postal"
                value={formResponse.postCode}
                onChange={updatePostal}
              />
            </label>

            <label htmlFor="country">
              Country
              <input
                type="text"
                name="counry"
                value={formResponse.country}
                onChange={updateCountry}
              />
            </label>
          </div>

          <p className="invoice-detail__text">bill to</p>

          <div className="new-invoice__form-group">
            <label htmlFor="client-name">
              Name
              <input
                type="text"
                name="client-name"
                value={formResponse.clientName}
                onChange={updateClientName}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="client-email">
              Email
              <input
                type="text"
                name="client-email"
                value={formResponse.clientEmail}
                onChange={updateClientEmail}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="client-address">
              Street Address
              <input
                type="text"
                name="client-address"
                value={formResponse.clientAddress}
                onChange={updateClientAddress}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="client-city">
              City
              <input
                type="text"
                name="client-city"
                value={formResponse.clientCity}
                onChange={updateClientCity}
              />
            </label>
            <label htmlFor="client-code">
              Post Code
              <input
                type="text"
                name="client-code"
                value={formResponse.clientCode}
                onChange={updateClientCode}
              />
            </label>
            <label htmlFor="client-country">
              Country
              <input
                type="text"
                name="client-country"
                value={formResponse.clientCountry}
                onChange={updateClientCountry}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="invoice-date">
              Invoice Date
              <input
                type="date"
                name="invoice-date"
                value={formResponse.invoiceDate}
                onChange={updateInvoiceDate}
              />
            </label>

            {/*Might need refactoring to match styling */}

            <label htmlFor="payment-terms">
              Payment Terms
              <select name="payment-terms">
                <option value="one-day">Net 1 Day</option>
                <option value="sevent-day">Net 7 Days</option>
                <option value="fourteen-day">Net 14 Days</option>
                <option value="thirty-days">Net 30 Days</option>
              </select>
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="project-desc">
              Project Description
              <input
                type="text"
                name="project-desc"
                value={formResponse.projectDesc}
                onChange={updateProjectDesc}
              />
            </label>
          </div>

          <div className="new-invoice__form-ctas">
            <CustomButtom
              buttonText="cancel"
              customClassName={`btn ${
                darkTheme ? "btn__light-dm" : "btn__light-lm"
              }`}
              buttonEvent={toggleInvoice}
            />

            <input
              type="submit"
              value="save changes"
              className="btn btn__primary"
            />
          </div>
        </form>
      </div>
    </section>
  ) : null;
};

export default NewInvoice;
