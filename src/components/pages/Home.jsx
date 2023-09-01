import Image from "../Image";
import img from "../../assets/img.avif";
import img4 from "../../assets/img4.jpg";
import img2Cut from "../../assets/img2Cut.jpg";
import imgCut from "../../assets/imgCut.jpg";
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <main className="home">
        <Image className="homeMainImg" image={imgCut} name={"homeBackground"} />
        <section className="inspiring">
          <summary className="home-quote">
            Where Urban style comes alive
          </summary>
          <button className="shopBtn">Shop</button>
        </section>
      </main>
    </>
  );
};

export default Home;
