import ProductCard from "../ProductCard";
import "../../styles/Shop.css";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <>
      <section className="shop">
        <nav className="productNav">
          <ul className="product-category">
            <li>
              <Link to="/shop" onClick={props.dataFetchSwitch}>
                All Products
              </Link>
            </li>
            <li>
              <Link to="/shop/electronics" onClick={props.dataFetchSwitch}>
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/shop/jewelery" onClick={props.dataFetchSwitch}>
                Jewelery
              </Link>
            </li>
            <li>
              <Link to="/shop/men's clothing" onClick={props.dataFetchSwitch}>
                Men's Clothing
              </Link>
            </li>
            <li>
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
