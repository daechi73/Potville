import React from "react";
import "../styles/Invoice.css";

const Invoice = (props) => {
  console.log(props.cart);
  let subTotal = 0;
  const displayCartInfo = () => {
    return props.cart.map((item) => {
      const itemTotal = Math.round(item.price * item.quantity * 100) / 100;
      subTotal += itemTotal;
      return (
        <>
          {item.quantity ? (
            <li key={item.id} className="invoice-list">
              <div className="invoice-item-info id">{item.id}</div>
              <div className="invoice-item-info price">${item.price}</div>
              <div className="operator"></div>
              <div className="invoice-item-info quantity">{item.quantity}</div>
              <div className="invoice-item-info total-item">${itemTotal}</div>
            </li>
          ) : (
            ""
          )}
        </>
      );
    });
  };

  return (
    <div className="invoice">
      <div className="invoice-header">Invoice</div>
      <div className="invoice-info">
        <div className="invoice-heading">
          <div>id</div>
          <div>P</div>
          <div></div>
          <div>Q</div>
          <div>T</div>
        </div>
        <ul className="invoice-ul">{displayCartInfo()}</ul>
      </div>

      <div className="invoice-total">
        Total: ${Math.round(subTotal * 100) / 100}
      </div>
    </div>
  );
};

export default Invoice;
