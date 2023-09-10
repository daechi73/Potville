import React from "react";

const Invoice = (props) => {
  console.log(props.cart);

  const displayCartInfo = () => {
    return props.cart.map((item) => {
      return (
        <>
          {item.quantity ? (
            <li key={item.id}>
              <span className="invoice-item-info id">id:{item.id}</span>
              <span className="invoice-item-info price">{item.price}</span>
              <span className="operator">X</span>
              <span className="invoice-item-info quantity">
                {item.quantity}
              </span>
              <span className="invoice-item-info total">
                {Math.round(item.price * item.quantity * 100) / 100}
              </span>
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
      <ul>{displayCartInfo()}</ul>
    </div>
  );
};

export default Invoice;
