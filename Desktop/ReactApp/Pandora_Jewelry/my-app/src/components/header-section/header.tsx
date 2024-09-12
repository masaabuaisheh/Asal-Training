import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';


const header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isNavDropdownVisible, setNavDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleVisible = () => {
    setNavDropdownVisible(true);
  };

  const handleMouseHidden = () => {
    setNavDropdownVisible(false);
  };

  return (
    <div className="header">
      <div className="announcement">
        <p className="announcement-paragraph">
          <b>FREE BRACELET</b> with qualifying purchase.
        </p>
      </div>
      <div className="logo-icons-section">
        <div className="logo">
          <img alt="PANDORA LOGO" src="/Pandora-Logo.png" />
        </div>
        <div className="icons-search">
          <div className="search">
            <input className="input-search" type="text" placeholder="search" />
            <CiSearch className="search-icon" />
          </div>
          <div className="icons">
            <a
              href="https://us.pandora.net/en/my-wishlist"
              target="_blank"
              className="icon-link"
            >
              <CiHeart className="icon" />
              <span className="tooltip">Wishlist</span>
            </a>
            <a
              href="https://stores.pandora.net/en-us/"
              target="_blank"
              className="icon-link"
            >
              <CiLocationOn className="icon" />
              <span className="tooltip">Find Stores</span>
            </a>
            <div
              className="login-section"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="https://us.pandora.net/en/login?join=true"
                target="_blank"
                className="icon-link"
              >
                <IoPersonOutline className="icon" />
                <span className="tooltip">Login to your account</span>
              </a>
              <div
                className={`login-pandora ${
                  isDropdownVisible ? "visible" : ""
                }`}
              >
                <h2>My PANDORA</h2>
                <a
                  className="login-button"
                  href="https://us.pandora.net/en/login"
                >
                  LOG IN
                </a>
                <a
                  className="join-button"
                  href="https://us.pandora.net/en/login?join=true"
                >
                  JOIN NOW
                </a>
                <img src="/login.png" alt="login image" />
                <a
                  href="https://us.pandora.net/en/mypandora"
                  className="what-is-pandora"
                >
                  What is My Pandora?
                </a>
                <p className="discout-text">
                  *The 10% discount will be in your account 3 days after you
                  join and is valid for 30 days. T&Cs and exclusions apply.
                </p>
              </div>
            </div>
            <a
              href="https://us.pandora.net/en/shopping-bag"
              target="_blank"
              className="icon-link"
            >
              <BsHandbag className="icon" />
              <span className="tooltip">Shopping Bag Items</span>
            </a>
          </div>
        </div>
      </div>
      <div className="nav">
        <nav className="navigation-bar">
          <div
            className="new-in-section"
            onMouseEnter={handleVisible}
            onMouseLeave={handleMouseHidden}
          >
            <a href="#">
              New In
              <MdKeyboardArrowDown className="arrow-icon" />
            </a>
            <div
              className={`n-section ${isNavDropdownVisible ? "visible" : ""}`}
            >
              <div className="section">
                <h5>New Jewelry</h5>
                <a href="#">All New Jewelry</a>
                <a href="#">Pandora Moments</a>
                <a href="#">Disney x Pandora</a>
                <a href="#">Pandora ME</a>
                <a href="#">Pandora Timeless</a>
                <a href="#">Birthstones</a>
                <a href="#">Icons of Love</a>
                <a href="#">Summer Collection</a>
                <Link href="/halloween">Halloween</Link>
                <a href="#">Lab-Grown Diamonds</a>
              </div>

              <div className="section">
                <h5>Trending Now</h5>
                <a href="#">All Jewelry</a>
                <a href="#">Bestsellers</a>
                <a href="#">Tennis Bracelets</a>
                <a href="#">Hearts & Promise Rings</a>
                <a href="#">Engravable Jewelry</a>
                <a href="#">Create a Custom Charm Necklace</a>
                <a href="#">Create a Custom Charm Bracelet</a>
                <a href="#">Lab Grown Diamonds</a>
                <a href="#">The Gold Edit</a>
              </div>

              <div className="section">
                <h5>Offers & Promotions</h5>
                <a href="#">All Offers & Promotions</a>
                <a href="#">Last Chance | Up to 30% Off</a>
              </div>

              <div className="section">
                <h5>BE LOVE</h5>
                <a href="#">Discover the Story</a>
              </div>
            </div>
          </div>
          <a href="#">
            Charms & Bracelets
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Rings
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Necklaces
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Earrings
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Gifts
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">Engravable Jewelry</a>
          <a href="">
            The Gold Edit
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Collections
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            LAB-GROWN DIAMONDS
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
          <a href="">
            Discover
            <MdKeyboardArrowDown className="arrow-icon" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default header;
