import Image from "../Image";
import img2 from "../../assets/img.avif";
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <main className="home">
        <Image className="homeMainImg" image={img2} name={"homeBackground"} />
      </main>
    </>
  );
};

export default Home;
