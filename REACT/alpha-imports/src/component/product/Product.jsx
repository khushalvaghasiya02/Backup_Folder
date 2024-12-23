import React from "react";
import cardImg from "../../assets/product/Images.png";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import './product.scss'

const Product = () => {
  return (
    <div id="product">
      <div className="container">
        <div className="product-content">
          <h3>Our Product</h3>
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <img src={cardImg} alt="Product" />
                <div className="overlay">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <div className="card-icons">
                    <button className="icon-btn">
                      <span>
                        <IoShareSocialOutline />
                      </span>{" "}
                      Share
                    </button>
                    <button className="icon-btn">
                      <span>
                        <FaRegHeart />
                      </span>{" "}
                      Like
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">
                    Product Title <span>$100</span>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ipsum aspernatur placeat eum itaque odit quis iste
                    ut. Perferendis beatae fuga exercitationem voluptates
                    nostrum neque quaerat laborum, dicta corporis illum!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={cardImg} alt="Product" />
                <div className="overlay">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <div className="card-icons">
                    <button className="icon-btn">
                      <span>
                        <IoShareSocialOutline />
                      </span>{" "}
                      Share
                    </button>
                    <button className="icon-btn">
                      <span>
                        <FaRegHeart />
                      </span>{" "}
                      Like
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">
                    Product Title <span>$100</span>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ipsum aspernatur placeat eum itaque odit quis iste
                    ut. Perferendis beatae fuga exercitationem voluptates
                    nostrum neque quaerat laborum, dicta corporis illum!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={cardImg} alt="Product" />
                <div className="overlay">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <div className="card-icons">
                    <button className="icon-btn">
                      <span>
                        <IoShareSocialOutline />
                      </span>{" "}
                      Share
                    </button>
                    <button className="icon-btn">
                      <span>
                        <FaRegHeart />
                      </span>{" "}
                      Like
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">
                    Product Title <span>$100</span>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ipsum aspernatur placeat eum itaque odit quis iste
                    ut. Perferendis beatae fuga exercitationem voluptates
                    nostrum neque quaerat laborum, dicta corporis illum!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <img src={cardImg} alt="Product" />
                <div className="overlay">
                  <button className="btn btn-add-to-cart">Add to cart</button>
                  <div className="card-icons">
                    <button className="icon-btn">
                      <span>
                        <IoShareSocialOutline />
                      </span>{" "}
                      Share
                    </button>
                    <button className="icon-btn">
                      <span>
                        <FaRegHeart />
                      </span>{" "}
                      Like
                    </button>
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">
                    Product Title <span>$100</span>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum, ipsum aspernatur placeat eum itaque odit quis iste
                    ut. Perferendis beatae fuga exercitationem voluptates
                    nostrum neque quaerat laborum, dicta corporis illum!
                  </p>
                </div>
              </div>
            </div>
          </div>
            <button className="btn btn-outline-primary">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
