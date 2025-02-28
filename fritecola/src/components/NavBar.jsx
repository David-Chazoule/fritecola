import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const menu = [
    {
      menu: "Biographie",
      route: "bio",
    },
    { menu: "Merchandasing", route: "merch" },
  ];
  return (
    <div className="Navbar_container">
      <ul>
        {menu &&
          menu.map((elem, key) => (
            <div key={key}>
              <Link to={`/${elem.route}`}>{elem.menu}</Link>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default NavBar;
