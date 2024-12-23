"use client";
import React from "react";
import PageBanner from "../common/PageBanner/PageBanner";
import "./blog.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Blog = () => {
  return (
    <>
      <PageBanner
        image={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/ls0ljcdk/element_243/rwdMode_1/2400x284/blog_header_product_4.webp"
        }
        title={"Blog"}
      />
      <div className="blog-main">
        <div className="container">
          <div className="blog-content">
            <div className="blog">
              <div className="blog-post">
                <div className="blog-post-image">
                  <img
                    src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_16/Workshop_3_blog_B-ls0ljibj.webp"
                    alt="blog-post"
                  />
                </div>
                <div className="blog-post-info">
                  <h3>How ceramics are made</h3>
                  <span> 17 August 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fermentum nisi nec massa rhoncus venenatis.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Phasellus suscipit...
                  </p>
                  <a>Read More</a>
                </div>
              </div>
              <div className="blog-post">
                <div className="blog-post-image">
                  <img
                    src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/tz47gb_newspage_17/Workshop_header_blog_A-ls0ljhbc.webp"
                    alt="blog-post"
                  />
                </div>
                <div className="blog-post-info">
                  <h3>
                    Czytaj więcej What affects the quality of ceramic products?
                  </h3>
                  <span> 17 August 2022</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fermentum nisi nec massa rhoncus venenatis.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Phasellus suscipit...
                  </p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
            <div className="sidebar">
              <div className="sidebar-img">
                <img
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_12/ls0ljcdk/element_245/rwdMode_1/300x200/blog_social.webp"
                  alt="sidebar-img"
                />
              </div>
              <ul>
                <li>Our social media</li>
                <li className="icon">
                  <FaFacebookF color="#a85e5e" size={24} />
                  <FaTwitter color="#a85e5e" size={24} />
                  <FaInstagram color="#a85e5e" size={24} />
                </li>
              </ul>
              <div className="blog-form">
                <span>Subscribe to our newsletter</span>
                <form>
                  <div className="form-group">
                    <label className="form-label">Name : </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Anna"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your e-mail : </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your@gmail.com"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message : </label>
                    <textarea
                      type="text"
                      rows={6}
                      cols={30}
                      className="form-input"
                      placeholder="Type the message content here.."
                    ></textarea>
                  </div>
                  <div className="form-btn">
                    <button className="send-btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
