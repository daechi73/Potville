const ProductCard = (props) => {
  return (
    <>
      <img
        src={props.product.image}
        alt={props.product.title}
        height={300}
        width={300}
      />
    </>
  );
};

export default ProductCard;
