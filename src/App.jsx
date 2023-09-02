import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [dataFetch, setDataFetch] = useState(false);
  const dataFetchSwitch = () => {
    setDataFetch(!dataFetch);
  };
  console.log("renderingAPP");
  return (
    <>
      <Header dataFetchSwitch={dataFetchSwitch} />
      <Content dataFetchSwitch={dataFetchSwitch} dataFetch={dataFetch} />
      <Footer />
    </>
  );
}

export default App;
