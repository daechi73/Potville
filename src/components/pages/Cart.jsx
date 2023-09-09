import ProductCartCard from "../ProductCartCard";

const Cart = (props) => {
  console.log(props.cart);
  const renderCart = () => {
    return props.cart.map((product) => (
      <ProductCartCard key={product.id} product={product} />
    ));
  };
  return <>{renderCart()}</>;
};

export default Cart;
