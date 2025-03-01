import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [showLink, setShowLink] = useState(false);

  const handleShowLinks = () => {
    setShowLink(!showLink);
  };

  const menu = [
    { menu: "Home", route: "home" },
    { menu: "Biographie", route: "bio" },
    { menu: "Merchandising", route: "merch" }
    
  ];

  return (
    <nav className="navbar_container">
      <ul className={`navbar_links ${showLink ? "show-nav" : ""}`}>
        {menu.map((elem, key) => (
          <li key={key} className="navbar_item" onClick={handleShowLinks}>
            <Link to={`/${elem.route}`}>{elem.menu}</Link>
          </li>
        ))}
      </ul>

      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className={`burger ${showLink ? "burgerx" : ""}`}></span>
      </button>
    </nav>
  );
}

export default NavBar;
