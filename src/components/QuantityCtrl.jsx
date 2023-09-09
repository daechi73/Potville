import React from "react";

const QuantityCtrl = (props) => {
  const itemQuantityAdjuster = (e) => {
    if (e.target.textContent === "+")
      props.setItemQuantity(props.itemQuantity + 1);
    if (e.target.textContent === "-")
      if (itemQuantity === 0) return;
      else props.setItemQuantity(props.itemQuantity - 1);
  };

  return (
    <div className="quantityController">
      <span className="decrementQuan" onClick={itemQuantityAdjuster}>
        -
      </span>
      <span className="quantity">{props.itemQuantity}</span>
      <span className="incrementQuan" onClick={itemQuantityAdjuster}>
        +
      </span>
    </div>
  );
};

export default QuantityCtrl;
