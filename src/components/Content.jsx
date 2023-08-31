import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Shop from "./pages/Shop";

const Content = () => {
  const { name } = useParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const dataFetch = (() => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          const dataList = json;
          //console.log(dataList);
          setProductList(dataList);
        });
    })();
  }, []);
  console.log(productList);
  return (
    <>
      {name === "shop" ? (
        <Shop productList={productList} />
      ) : name === "about" ? (
        <About />
      ) : (
        "default"
      )}
    </>
  );
};

export default Content;
