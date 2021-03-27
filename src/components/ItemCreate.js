import PlusSign from "../assets/icon-plus.svg";
import CustomButton from "./CustomButton";
// import { useContext } from "react";
// import { InvoiceCreateContext } from "../../context/InvoiceCreateContext";

const ItemCreate = () => {
  // const { creatingInvoice, setCreatingInvoice } = useContext(
  //   InvoiceCreateContext
  // );

  const addItem = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="item-list">
      <h2>Item List</h2>
      <div className="item-list__header">
        <h3>Item Name</h3>
        <h3>QTY</h3>
        <h3>Price</h3>
        <h3>Total</h3>
      </div>
      <div className="item-list__item">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </div>
      <CustomButton
        userIcon={PlusSign}
        buttonText="add new item"
        customClassName="btn btn__light-lm"
        buttonEvent={addItem}
      />

      {/*
       * New Item button generates an ItemCreate component
       *ItemCreate has 4 inputs (3 that can be edited, 1 muted)
       *The last input should show the result of quantity * price
       *Trash icon should delete its ItemCreate
       * A way to determine whether to show the header or not
       *
       * [itemCreate, setItemCreate] = state([])
       * itemCreate.push(itemCreateFieldValues)
       * if itemCreate has something in it, show the item-list_header,
       * else don't
       *
       */}
    </div>
  );
};

export default ItemCreate;
