import { useContext } from "react";
import PropTypes from "prop-types";
import PriceDetail from "./PriceDetail";
import { ThemeContext } from "../context/ThemeContext";
import PriceTotal from "./PriceTotal";

const InvoiceDetail = ({ invoice }) => {
  const {
    invoiceId,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    items,
  } = invoice;

  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`invoice-detail ${darkTheme ? "dark-details" : ""} `}>
      <div className="invoice-detail__header">
        <div className="invoice-detail__header-info">
          <p className="">{invoiceId}</p>
          <p className="invoice-detail__text">{description}</p>
        </div>
        <div className="invoice-detail__address">
          <p className="invoice-detail__text">
            {senderAddress && senderAddress.street}
          </p>
          <p className="invoice-detail__text ">
            {senderAddress && senderAddress.city}
          </p>
          <p className="invoice-detail__text ">
            {senderAddress && senderAddress.postCode}
          </p>
          <p className="invoice-detail__text ">
            {senderAddress && senderAddress.country}
          </p>
        </div>
      </div>

      <div className="invoice-detail__body">
        <div className="invoice-detail__body-dates">
          <div className="invoice-detail__body-invoice-date">
            <p className="invoice-detail__text invoice-detail__title ">
              invoice date
            </p>
            <p>{createdAt}</p>
          </div>

          <div className="invoice-detail__body-due-date">
            <p className="invoice-detail__text invoice-detail__title ">
              payment due
            </p>
            <p>{paymentDue}</p>
          </div>
        </div>

        <div className="invoice-detail__body-client">
          <p className="invoice-detail__text invoice-detail__title ">bill to</p>
          <p>{clientName} </p>
          <p className="invoice-detail__text">
            {clientAddress && clientAddress.street}
          </p>
          <p className="invoice-detail__text">
            {clientAddress && clientAddress.city}
          </p>
          <p className="invoice-detail__text">
            {clientAddress && clientAddress.postal}
          </p>
          <p className="invoice-detail__text">
            {clientAddress && clientAddress.country}
          </p>
        </div>

        <div className="invoice-detail__body-email">
          <p className="invoice-detail__text invoice-detail__title ">sent to</p>
          <p>{clientEmail}</p>
        </div>
      </div>

      <div className="invoice-detail__total">
        <div className="invoice-container">
          <div className="invoice-detail__total-header">
            <div className="invoice-detail__total-name">
              <p className="invoice-detail__text">Item Name</p>
            </div>
            <div className="invoice-detail__total-info">
              <p className="invoice-detail__text">QTY.</p>
              <p className="invoice-detail__text">Price</p>
              <p className="invoice-detail__text">Total</p>
            </div>
          </div>

          {items &&
            items.map((item) => (
              <PriceDetail key={Math.random()} item={item} />
            ))}
        </div>
        {
          // Work on generating total
          <PriceTotal items={items} />
        }
      </div>
    </div>
  );
};

InvoiceDetail.propTypes = {
  invoice: PropTypes.object.isRequired,
};

InvoiceDetail.defaultProps = {
  invoice: {},
};

export default InvoiceDetail;
