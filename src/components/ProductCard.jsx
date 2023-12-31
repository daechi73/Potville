import "../styles/ProductCard.css";
import { useState } from "react";
import Image from "./Image";
import QuantityCtrl from "./QuantityCtrl";

const ProductCard = (props) => {
  //console.log(props.product);
  const [itemQuantity, setItemQuantity] = useState(0);

  const reviewStars = () => {
    const reviewStars = [];
    for (let i = 0; i < Math.floor(props.product.rating.rate); i++) {
      const star = <span key={i} className="fa fa-star checked"></span>;
      reviewStars.push(star);
    }
    if (props.product.rating.rate % 1 !== 0)
      reviewStars.push(
        <span key={reviewStars.length} className="fa fa-star"></span>
      );
    reviewStars.push(
      <span key={reviewStars.length + 1}>{props.product.rating.count}</span>
    );
    return reviewStars;
  };

  const addItemToCart = () => {
    if (itemQuantity === 0) return alert("Cannot add 0 quantity of this item");
    let found = false;
    let cartTemp = props.cart.map((cartProduct) => {
      if (cartProduct.id === props.product.id) {
        found = true;
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + itemQuantity,
        };
      } else return cartProduct;
    });
    if (found === false) {
      cartTemp.push({ ...props.product, quantity: itemQuantity });
    }
    setItemQuantity(0);
    props.setCart(cartTemp);
    //console.log(cartTemp);
  };

  return (
    <div className="productCard">
      <Image
        className="card-img"
        image={props.product.image}
        name={props.product.title}
      />
      <div className="productCard-infos">
        <div className="productCard-name productCard-info">
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
      <QuantityCtrl
        itemQuantity={itemQuantity}
        setItemQuantity={setItemQuantity}
      />

      <button className="addToCartBtn" onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
