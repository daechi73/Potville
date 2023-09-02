import "../styles/ProductCard.css";

const ProductCard = (props) => {
  return (
    <>
      <img
        className="card-img"
        src={props.product.image}
        alt={props.product.title}
      />
    </>
  );
};

export default ProductCard;
