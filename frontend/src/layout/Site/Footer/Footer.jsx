import React from "react";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="common__footer">
        <div className="common__footer__logo">
          <img
            src="https://cdn.freelogodesign.org/files/c6abbfca984f48c3942b036ac2477053/thumb/logo_200x200.png?v=0"
            alt=""
          />
          <p>The best look anytime, anywhere.</p>
        </div>
        <div className="common__footer__her">
          <h1>For her</h1> 
          <p>Women Jeans </p>
         <p> Tops and Shirts</p>
         <p>Heels and Flats</p>
         <p>Women Jackets</p>
         <p>Women Accessories</p>
        </div>
        <div className="common__footer__him">
        <h1>For Him</h1> 
          <p>Men Jeans</p>
         <p>Men Shirts</p>
         <p>Men Shoes</p>
         <p>Men Accessories</p>
         <p>Men Jackets</p>
        </div>
        <div className="common__footer__connect">
          <h1>Subscribe</h1>
          <input id="email" type="email" placeholder="Your email address"/>
          <button>Subscribe</button>
       
        </div>
      </div>
    </>
  );
};

export default Footer;
