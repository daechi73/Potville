import "../../styles/Cart.css";
import Invoice from "../Invoice";
import ProductCartCard from "../ProductCartCard";

const Cart = (props) => {
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
      <Invoice cart={props.cart} />
    </div>
  );
};

export default Cart;
