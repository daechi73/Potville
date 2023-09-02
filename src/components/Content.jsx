import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const Content = () => {
  window.scrollTo(0, 0);
  const { name } = useParams();
  const [productList, setProductList] = useState([]);
  const [dataFetch, setDataFetch] = useState(false);

  const dataFetchSwitch = () => {
    setDataFetch(!dataFetch);
  };

  useEffect(() => {
    const dataFetch = (() => {
      let url;
      name === "electronics"
        ? (url = "/products/category/electronics")
        : name === "jewelery"
        ? (url = "/products/category/jewelery")
        : name === "men's clothing"
        ? (url = "/products/category/men's%20clothing")
        : name === "women's clothing"
        ? (url = "/products/category/women's%20clothing")
        : (url = "/products/");
      fetch("https://fakestoreapi.com" + url)
        .then((res) => res.json())
        .then((json) => {
          const dataList = json;
          //console.log(dataList);
          setProductList(dataList);
        });
    })();
  }, [dataFetch]);
  console.log(name);
  return (
    <>
      {name === "shop" ||
      name === "electronics" ||
      name === "jewelery" ||
      name === "women's clothing" ||
      name === "men's clothing" ? (
        <Shop productList={productList} dataFetchSwitch={dataFetchSwitch} />
      ) : name === "about" ? (
        <About />
      ) : (
        <Home />
      )}
    </>
  );
};

export default Content;
