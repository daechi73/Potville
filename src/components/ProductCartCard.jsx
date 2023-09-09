import Image from "./Image";
import "../styles/ProductCartCard.css";

const ProductCartCard = (props) => {
  return (
    <>
      <div className={"productCartCard " + props.product.title}>
        <Image
          className="cart-card-img"
          image={props.product.image}
          name={props.product.title}
        />
        <div className="productCartCard-infos">
          <div className="productCard-name productCard-info">
            {props.product.title}
          </div>
          <div className="productCard-price productCard-info">
            Price: ${props.product.price}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCartCard;
