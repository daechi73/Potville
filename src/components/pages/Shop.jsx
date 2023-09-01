import ProductCard from "../ProductCard";

const Shop = (props) => {
  return (
    <>
      {props.productList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </>
  );
};

export default Shop;
