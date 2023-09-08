import "../styles/ProductCard.css";
import Image from "./Image";

const ProductCard = (props) => {
  console.log(props.product);
  const reviewStars = () => {
    const reviewStars = [];
    for (let i = 0; i < Math.floor(props.product.rating.rate); i++) {
      const star = <span className="fa fa-star checked"></span>;
      reviewStars.push(star);
    }
    if (props.product.rating.rate % 1 !== 0)
      reviewStars.push(<span className="fa fa-star"></span>);
    reviewStars.push(<span>{props.product.rating.count}</span>);
    return reviewStars;
  };

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
        {reviewStars()}
      </div>
    </div>
  );
};

export default ProductCard;
