import "../styles/Image.css";

const Image = (props) => {
  return <img src={props.image} alt={props.name} className={props.className} />;
};

export default Image;
