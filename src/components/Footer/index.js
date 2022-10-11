import React from "react";
import "./styles.css";
const Footer = () => {
  return (
    <section className="footer-sec">
      <div className="container-footer">
        <div className="footer-content">
          <div className="categories">
            <h3>Categories</h3>
            <div className="footer-text">
              About us
              <br />
              Testimonials
              <br />
              Contact
              <br />
              Journal
              <br />
              Privacy Policy
            </div>
          </div>
          <div className="partners">
            <h3>Partners</h3>
            <div className="footer-text">
              Support
              <br />
              Shipping & Returns
              <br />
              Size Guide
              <br />
              Product Care
            </div>
          </div>
          <div className="contact-us">
            <h3>Contact us</h3>
            <div className="footer-text">
              <div>26A Pagoda St, TANGS, Singapore, 058187</div>
              <div>+65 6221 5462</div>
            </div>
          </div>
          <div className="subscribe">
            <h3>Subscribe to newsletter</h3>
            <div className="inter">
              <input type={"text"} value={"Subscribe to newsletter"} />
              <button>Subscribe</button>
            </div>
            <div className="social-icon">
              <img src="./assets/icons/Facebook.svg"/>
              <img src="./assets/icons/Twitter.svg"/>
            </div>
          </div>
        </div>
        <div className="copyRight">© Copyright Matter PTE LTD 2017</div>
      </div>
    </section>
  );
};

export default Footer;
