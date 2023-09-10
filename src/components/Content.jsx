import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Content = (props) => {
  window.scrollTo(0, 0);
  const { name } = useParams();
  const [productList, setProductList] = useState([]);

  const renderShop = () => {
    const namesToPass = [
      "shop",
      "jewelery",
      "electronics",
      "women's clothing",
      "men's clothing",
    ];
    for (const paramName of namesToPass) {
      if (name === paramName) return true;
    }
    return false;
  };

  const getURL = () => {
    let url;
    name === "electronics"
      ? (url = "category/electronics")
      : name === "jewelery"
      ? (url = "category/jewelery")
      : name === "men's clothing"
      ? (url = "category/men's%20clothing")
      : name === "women's clothing"
      ? (url = "category/women's%20clothing")
      : (url = "");
    return url;
  };

  useEffect(() => {
    const dataFetch = (() => {
      const url = getURL();
      fetch("https://fakestoreapi.com/products/" + url)
        .then((res) => res.json())
        .then((json) => {
          const dataList = json;
          //console.log(dataList);
          setProductList(dataList);
        });
    })();
  }, [props.dataFetch]);
  //console.log("renderingContent");

  return (
    <>
      {renderShop() ? (
        <Shop
          productList={productList}
          dataFetchSwitch={props.dataFetchSwitch}
          cart={props.cart}
          setCart={props.setCart}
        />
      ) : name === "about" ? (
        <About />
      ) : name === "cart" ? (
        <Cart cart={props.cart} setCart={props.setCart} />
      ) : (
        <Home dataFetchSwitch={props.dataFetchSwitch} />
      )}
    </>
  );
};

export default Content;
