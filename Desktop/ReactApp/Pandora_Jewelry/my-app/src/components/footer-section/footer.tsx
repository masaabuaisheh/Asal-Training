import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="footer-section">
      <div className="join-section">
        <div className="join">
          <h4>Join My PANDORA</h4>
          <h6>
            Join our rewards program today to earn points, get personal offers
            and enjoy exclusive benefits.
          </h6>
        </div>
        <div className="Jbutton">
          <a
            className="join-button"
            href="https://us.pandora.net/en/login?join=true"
          >
            JOIN NOW
          </a>
        </div>
      </div>
      <div className="info-section">
        <div className="shop">
          <h5>Shop</h5>
          <a href="/promotions/offers"> Promotion & Offers</a>
          <a href="/promotions/charms">Charms</a>
          <a href="/promotions/bracelets">Bracelets</a>
          <a href="/promotions/rings">Rings</a>
          <a href="/promotions/necklaces-pendants">Necklaces & Pendants</a>
          <a href="/promotions/earrings">Earrings</a>
          <a href="/promotions/lab-grown-diamonds">Lab-Grown Diamonds</a>
          <a href="/promotions/pandora-collections">Pandora Collections</a>
          <a href="/promotions/gifts">Gifts</a>
          <a href="/promotions/gift-cards">Gift Cards</a>
        </div>
        <div className="customer-service">
          <h5>Customer Service</h5>
          <a href="/faqs">FAQs</a>
          <a href="/orders">Orders</a>
          <a href="/shipping">Shipping</a>
          <a href="/returns">Returns</a>
          <a href="/size-guide">Size Guide</a>
          <a href="/product-care">Product Care</a>
          <a href="/warranty">Warranty</a>
          <a href="/contact-us">Contact Us</a>
        </div>
        <div className="services">
          <h5>Services</h5>
          <a href="/klarna">Klarna</a>
          <a href="/afterpay">Afterpay</a>
          <a href="/pandora-credit-card">Pandora Credit Card</a>
        </div>
        <div className="manage">
          <h5>Manage</h5>
          <a href="/my-pandora">My Pandora</a>
          <a href="/my-account">My Account</a>
          <a href="/my-details">My Details</a>
          <a href="/my-orders">My Orders</a>
          <a href="/wish-list">Wish list</a>
        </div>
        <div className="about-us">
          <h5>About Us</h5>
          <a href="/about-pandora">About Pandora</a>
          <a href="/pandora-company">PANDORA Company</a>
          <a href="/store-locator">Store Locator</a>
          <a href="/authorized-retailers">
            Authorized Pandora Online Retailers
          </a>
          <a href="/careers">Careers</a>
          <a href="/terms-conditions">Terms and Conditions</a>
          <a href="/my-pandora-terms">My Pandora Terms and Conditions</a>
          <a href="/california-transparency">
            California Transparency in Supply Chains Statement
          </a>
          <a href="/do-not-sell">
            Do Not Sell or Share My Personal Information
          </a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/cookies-settings">Cookies Settings</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/privacy-rights-request">Privacy Rights Request</a>
          <a href="/site-map">Site Map</a>
        </div>
      </div>
      <div className="copy-right-section">
        <div className="left-section">
          <h5>© ALL RIGHTS RESERVED. 2024 Pandora</h5>
          <a> United States &nbsp; English</a>
        </div>
        <div className="right-section">
          <a href="https://www.facebook.com/PandoraUS/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/theofficialpandora/">
            <FaInstagram />
          </a>
          <a href="https://x.com/PANDORA_Corp">
            <FaTwitterSquare />
          </a>
          <a href="https://www.youtube.com/user/TheOfficialPandora">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com/officialpandora/">
            <FaPinterest />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
