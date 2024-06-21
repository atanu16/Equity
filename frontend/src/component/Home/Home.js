/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import BgVideo from '../../images/videoplayback.mp4'
import Brand from '../../images/Screenshot_2023-05-02_103118-removebg-preview.png'
import BgVideo1 from '../../images/sixnine for Birkenstock – SHINJUKU.mp4'

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Equity - Home" />

          <div className="banner">
          {/* <video src={BgVideo1} autoPlay muted loop class="video-bg" /> */}
          <div className="shade"></div>
          <video src={BgVideo1} autoPlay muted loop class="video-bg" />
            <p></p>
            <img src={Brand} className="Brand"></img>
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        

            <a href="#container">
              <button>
                Explore <CgMouse />
              </button>
            </a>
          </div>
          

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
