import "../styles/ProductCard.css";
import { useState } from "react";
import Image from "./Image";

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

  const itemQuantityAdjuster = (e) => {
    if (e.target.textContent === "+") setItemQuantity(itemQuantity + 1);
    if (e.target.textContent === "-")
      if (itemQuantity === 0) return;
      else setItemQuantity(itemQuantity - 1);
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
    console.log(cartTemp);
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
      <div className="quantityContainer">
        <span className="decrementQuan" onClick={itemQuantityAdjuster}>
          -
        </span>
        <span className="quantity">{itemQuantity}</span>
        <span className="incrementQuan" onClick={itemQuantityAdjuster}>
          +
        </span>
      </div>
      <button className="addToCartBtn" onClick={addItemToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
