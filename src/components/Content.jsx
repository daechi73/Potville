import About from "./About";
import Shop from "./Shop";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <>{name === "shop" ? "shop" : name === "about" ? "about" : "default"}</>
  );
};

export default Content;
