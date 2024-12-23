import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import Banner from "./component/Banner";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App" >
      {loading ? (
        <PropagateLoader color="red" css={override} size={40} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}/>
      ) : (
        <>
          <Navbar />
          <Banner />
          <Product />
          <About />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
