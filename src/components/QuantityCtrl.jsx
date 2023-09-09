import React from "react";

const QuantityCtrl = (props) => {
  return (
    <div className="quantityController">
      <span className="decrementQuan" onClick={props.itemQuantityAdjuster}>
        -
      </span>
      <span className="quantity">{props.itemQuantity}</span>
      <span className="incrementQuan" onClick={props.itemQuantityAdjuster}>
        +
      </span>
    </div>
  );
};

export default QuantityCtrl;
