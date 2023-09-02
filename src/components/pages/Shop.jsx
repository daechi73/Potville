import ProductCard from "../ProductCard";
import "../../styles/Shop.css";
import { Link } from "react-router-dom";

const Shop = (props) => {
  console.log("rendering Shop");
  return (
    <>
      <section className="shop">
        <nav className="productNav">
          <div className="category-title">Category:</div>
          <ul className="product-category">
            <li>
              <span>&#10551;</span>
              <Link to="/shop" onClick={props.dataFetchSwitch}>
                All Products
              </Link>
            </li>
            <li>
              <span>&#10551;</span>
              <Link to="/shop/electronics" onClick={props.dataFetchSwitch}>
                Electronics
              </Link>
            </li>
            <li>
              <span>&#10551;</span>
              <Link to="/shop/jewelery" onClick={props.dataFetchSwitch}>
                Jewelery
              </Link>
            </li>
            <li>
              <span>&#10551;</span>
              <Link to="/shop/men's clothing" onClick={props.dataFetchSwitch}>
                Men's Clothing
              </Link>
            </li>
            <li>
              <span>&#10551;</span>
              <Link to="/shop/women's clothing" onClick={props.dataFetchSwitch}>
                Women's Clothing
              </Link>
            </li>
          </ul>
        </nav>
        <section className="productList">
          {props.productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Shop;
