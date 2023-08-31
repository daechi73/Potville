const Shop = (props) => {
  return (
    <>
      {props.productList.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </>
  );
};

export default Shop;
