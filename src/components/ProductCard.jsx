import "../styles/ProductCard.css";
import Image from "./Image";

const ProductCard = (props) => {
  return (
    <>
      <Image
        className="card-img"
        image={props.product.image}
        name={props.product.title}
      />
    </>
  );
};

export default ProductCard;
