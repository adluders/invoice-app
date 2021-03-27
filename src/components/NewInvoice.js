import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { InvoiceCreateContext } from "../context/InvoiceCreateContext";
import { InvoiceContext } from "../context/InvoiceContext";
import CustomButtom from "./CustomButton";
import ItemCreate from "./ItemCreate";

const NewInvoice = () => {
  const { darkTheme } = useContext(ThemeContext);

  const { creatingInvoice, setCreatingInvoice, toggleInvoice } = useContext(
    InvoiceCreateContext
  );

  const { addInvoice } = useContext(InvoiceContext);

  const numGenerator = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let letter1 = numGenerator(10, 35).toString(36).toUpperCase();

  let letter2 = numGenerator(10, 35).toString(36).toUpperCase();

  const num = numGenerator(1000, 9999);

  const [formResponse, setFormResponse] = useState({
    invoiceId: `${letter1}${letter2}${num}`,
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    // streetAddress: "",
    // city: "",
    // postCode: "",
    // country: "",
    clientName: "",
    clientEmail: "",
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    // clientAddress: "",
    // clientCity: "",
    // clientCode: "",
    // clientCountry: "",
    invoiceDate: "",
    description: "",
    status: "pending",
    createdAt: "2021-03-16",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addInvoice(formResponse);
    setCreatingInvoice(false);
  };

  const updateStreetAddress = (e) => {
    setFormResponse({
      ...formResponse,
      senderAddress: {
        ...formResponse.senderAddress,
        street: e.target.value,
      },
    });
  };

  const updateCity = (e) =>
    setFormResponse({
      ...formResponse,
      senderAddress: {
        ...formResponse.senderAddress,
        city: e.target.value,
      },
    });

  const updatePostal = (e) =>
    setFormResponse({
      ...formResponse,
      senderAddress: {
        ...formResponse.senderAddress,
        postCode: e.target.value,
      },
    });

  const updateCountry = (e) =>
    setFormResponse({
      ...formResponse,
      senderAddress: {
        ...formResponse.senderAddress,
        country: e.target.value,
      },
    });

  const updateClientName = (e) =>
    setFormResponse({ ...formResponse, clientName: e.target.value });

  const updateClientEmail = (e) =>
    setFormResponse({ ...formResponse, clientEmail: e.target.value });

  const updateClientStreet = (e) =>
    setFormResponse({
      ...formResponse,
      clientAddress: {
        ...formResponse.clientAddress,
        street: e.target.value,
      },
    });

  const updateClientCity = (e) =>
    setFormResponse({
      ...formResponse,
      clientAddress: {
        ...formResponse.clientAddress,
        city: e.target.value,
      },
    });

  const updateClientCode = (e) =>
    setFormResponse({
      ...formResponse,
      clientAddress: {
        ...formResponse.clientAddress,
        postCode: e.target.value,
      },
    });

  const updateClientCountry = (e) =>
    setFormResponse({
      ...formResponse,
      clientAddress: {
        ...formResponse.clientAddress,
        country: e.target.value,
      },
    });

  const updatePaymentDue = (e) =>
    setFormResponse({ ...formResponse, paymentDue: e.target.value });

  const updateProjectDesc = (e) =>
    setFormResponse({ ...formResponse, description: e.target.value });

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
                value={formResponse.senderAddress.street}
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
                value={formResponse.senderAddress.city}
                onChange={updateCity}
              />
            </label>

            <label htmlFor="postal">
              Post Code
              <input
                type="text"
                name="postal"
                value={formResponse.senderAddress.postCode}
                onChange={updatePostal}
              />
            </label>

            <label htmlFor="country">
              Country
              <input
                type="text"
                name="counry"
                value={formResponse.senderAddress.country}
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
                value={formResponse.clientAddress.street}
                onChange={updateClientStreet}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <label htmlFor="client-city">
              City
              <input
                type="text"
                name="client-city"
                value={formResponse.clientAddress.city}
                onChange={updateClientCity}
              />
            </label>
            <label htmlFor="client-code">
              Post Code
              <input
                type="text"
                name="client-code"
                value={formResponse.clientAddress.postCode}
                onChange={updateClientCode}
              />
            </label>
            <label htmlFor="client-country">
              Country
              <input
                type="text"
                name="client-country"
                value={formResponse.clientAddress.country}
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
                value={formResponse.paymentDue}
                onChange={updatePaymentDue}
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
                value={formResponse.description}
                onChange={updateProjectDesc}
              />
            </label>
          </div>

          <div className="new-invoice__form-group">
            <ItemCreate />
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
