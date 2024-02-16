import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Just Eat It</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            {/* Add additional navigation items here */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;