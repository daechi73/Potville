import React from "react";

const QuantityCtrl = (props) => {
  const updateItemQuantity = (e) => {
    let newItemQuantity;
    if (e.target.textContent === "+") newItemQuantity = props.itemQuantity + 1;
    else newItemQuantity = props.itemQuantity - 1;
    if (newItemQuantity === -1) return;
    let cartTemp = props.cart.map((cartProduct) => {
      if (cartProduct.id === props.product.id) {
        return {
          ...cartProduct,
          quantity: newItemQuantity,
        };
      } else return cartProduct;
    });
    props.setCart(cartTemp);
  };
  const itemQuantityAdjuster = (e) => {
    if (e.target.textContent === "+")
      props.setItemQuantity(props.itemQuantity + 1);
    if (e.target.textContent === "-")
      if (props.itemQuantity === 0) return;
      else props.setItemQuantity(props.itemQuantity - 1);
  };
  const clickHandler = (e) => {
    itemQuantityAdjuster(e);
    if (props.productCartCard) updateItemQuantity(e);
  };
  return (
    <div className="quantityController">
      <span className="decrementQuan" onClick={clickHandler}>
        -
      </span>
      <span className="quantity">{props.itemQuantity}</span>
      <span className="incrementQuan" onClick={clickHandler}>
        +
      </span>
    </div>
  );
};

export default QuantityCtrl;
