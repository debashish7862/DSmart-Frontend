import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="topUp">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to DSmart E-Commerce: Elevate Your Shopping Experience At
            DSmart E-Commerce, we bring you a seamless and enjoyable online
            shopping experience, tailored to meet your diverse needs and
            preferences. Whether you're a tech enthusiast, fashion-forward
            individual, or someone looking for everyday essentials, our platform
            offers a curated selection of high-quality products, unparalleled
            customer service, and a user-friendly interface to enhance your
            shopping journey.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Email:<strong> debashish7862@gmail.com </strong> , Phone:<strong> +91-7008-979-288 </strong>
            Location:<strong> Bangalore </strong>, India For any inquiries, assistance, or
            feedback, feel free to reach out to us via email or phone. Our
            customer support team is dedicated to providing you with the best
            shopping experience.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">DSmart</span>
          <span className="copyright">
            &copy;Copyright 2024 .All Rights Reserverd
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="paymentlogo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
