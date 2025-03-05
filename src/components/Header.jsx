import React, { useState, useRef } from "react";
import { FaAngleDown, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Import icons
import "../App.css";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Ratanada");
  const searchInputRef = useRef(null); // Ref for search input

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  const handleSearchClick = () => {
    searchInputRef.current.focus(); // Focus the input when clicking the icon
  };

  return (
    <header className="header">
      {/* Logo and Location */}
      <div className="left-section">
        <img src="swiggylogo.png" alt="logo" className="logo" />
        <div
          className="location"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="location-name">
            {selectedLocation} <FaAngleDown className="caret" />
          </span>
          {showDropdown && (
            <ul className="dropdown">
              <li onClick={() => handleSelectLocation("Hyderabad")}>
                Hyderabad
              </li>
              <li onClick={() => handleSelectLocation("Andhra Pradesh")}>
                Andhra Pradesh
              </li>
              <li onClick={() => handleSelectLocation("Telangana")}>
                Telangana
              </li>
              <li onClick={() => handleSelectLocation("Bangalore")}>
                Bangalore
              </li>
              <li onClick={() => handleSelectLocation("Mumbai")}>Mumbai</li>
            </ul>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" onClick={handleSearchClick} />
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search for restaurants, dishes..."
        />
      </div>

      {/* Navigation Options */}
      <div className="nav-options">
        <div
          className="nav-item offers"
          onClick={() => alert("Redirecting to Offers page")}
        >
          Offers <span className="new-tag">New</span>
        </div>
        <div
          className="nav-item"
          onClick={() => alert("Redirecting to Help page")}
        >
          Help
        </div>
        <div
          className="nav-item account"
          onClick={() => alert("Redirecting to Account/Signup")}
        >
          <FaUser className="user-icon" /> Account / Signup
        </div>
        <div
          className="nav-item cart"
          onClick={() => alert("Redirecting to Cart")}
        >
          <FaShoppingCart className="cart-icon" />
        </div>
      </div>
    </header>
  );
}
