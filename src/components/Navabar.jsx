import React from "react";
import {Link} from 'react-router-dom'

const Navabar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Product Management
          </Link>
          <Link className="navbar-brand"  to="/">
            Home
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarNavDropdown">
          <Link className="navbar-brand" to="/addProduct">
            Add Product
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navabar;
