import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div classNameName='container'>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid bg-info p-3">
    <a className="navbar-brand" href="#">Gran Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Location</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    );
};

export default Header;