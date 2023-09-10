import Image from "./Image";
import QuantityCtrl from "./QuantityCtrl";
import "../styles/ProductCartCard.css";
import { useState } from "react";

const ProductCartCard = (props) => {
  const [itemQuantity, setItemQuantity] = useState(props.product.quantity);
  return (
    <>
      <div className={"productCartCard " + props.product.title}>
        <div className="cart-img">
          <Image
            className="cart-card-img"
            image={props.product.image}
            name={props.product.title}
          />
        </div>
        <div className="cart-infos">
          <div className="productCard-name productCard-info">
            {props.product.title}
          </div>
          <div className="productCard-price productCard-info">
            Price: ${props.product.price}
          </div>
        </div>
        <div className="cart-quantity">
          Quantity:
          <QuantityCtrl
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
            productCartCard={true}
            cart={props.cart}
            setCart={props.setCart}
            product={props.product}
          />
        </div>
      </div>
    </>
  );
};

export default ProductCartCard;
