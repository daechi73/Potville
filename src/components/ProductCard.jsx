import "../styles/ProductCard.css";
import Image from "./Image";

const ProductCard = (props) => {
  console.log(props.product);
  return (
    <div className="productCard">
      <Image
        className="card-img"
        image={props.product.image}
        name={props.product.title}
      />
      <div className="productCard-infos">
        {" "}
        <div className="productCard-name productCard-info">
          {" "}
          {props.product.title}
        </div>
        <div className="productCard-price productCard-info">
          Price: ${props.product.price}
        </div>
        <div className="productCard-rating productCard-info">
          Rating: {props.product.rating.rate}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
