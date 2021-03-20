import { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import { InvoiceDeleteContext } from "../../context/InvoiceDeleteContext";
import CustomButton from "./CustomButton";

const ConfirmDelete = ({ invoice }) => {
  const { invoiceDelete, initDelete } = useContext(InvoiceDeleteContext);
  const { removeInvoice } = useContext(InvoiceContext);

  return invoiceDelete ? (
    <section className="delete-wrapper">
      <div className="delete-modal">
        <div className="delete-modal__header">
          <h2>Confirm Deletion</h2>
        </div>
        <div className="delete-modal__info">
          <p>
            Are you sure you want to delete invoice #{invoice.invoiceId}? This
            action cannot be undone
          </p>
        </div>
        <div className="delete-modal__ctas">
          <CustomButton
            customClassName="btn btn__light"
            buttonText="cancel"
            buttonEvent={initDelete}
          />
          <CustomButton
            customClassName="btn btn__secondary"
            buttonText="delete"
            buttonEvent={() => {
              removeInvoice(invoice.invoiceId);
              initDelete();
            }}
          />
        </div>
      </div>
    </section>
  ) : null;
};

export default ConfirmDelete;
