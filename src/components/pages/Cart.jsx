import "../../styles/Cart.css";

import ProductCartCard from "../ProductCartCard";

const Cart = (props) => {
  console.log(props.cart);
  const renderItemsCart = () => {
    return props.cart.map((product) => (
      <ProductCartCard
        key={product.id}
        product={product}
        cart={props.cart}
        setCart={props.setCart}
      />
    ));
  };
  return (
    <div className="cart">
      <div className="items">{renderItemsCart()}</div>
      <div className="invoice">ja</div>
    </div>
  );
};

export default Cart;
