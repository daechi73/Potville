import Image from "../Image";
import imgCut2 from "../../assets/imgCut2.jpg";
import imgCut from "../../assets/imgCut.jpg";
import pb from "../../assets/PB.jpg";
import "../../styles/Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  let backgroundImg;
  window.innerWidth < 400
    ? (backgroundImg = imgCut2)
    : (backgroundImg = imgCut);
  return (
    <>
      <main className="home">
        <Image
          className="homeMainImg"
          image={backgroundImg}
          name={"homeBackground"}
        />
        <section className="inspiring">
          <summary className="home-quote">
            Where Urban style comes alive
          </summary>
          <Link
            className="shopBtn"
            to="/Potville/shop"
            onClick={props.dataFetchSwitch}
          >
            Shop
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
