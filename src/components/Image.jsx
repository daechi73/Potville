const Image = (props) => {
  return (
    <>
      <img src={props.image} alt={props.name} className={props.className} />
      {props.price ? props.price : ""}
      {props.rating ? props.rating : ""}
    </>
  );
};

export default Image;
