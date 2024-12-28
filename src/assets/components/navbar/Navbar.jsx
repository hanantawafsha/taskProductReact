import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#">Category/Product Pojrect</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span></button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded active" aria-current="page" to={'/'}>Categories</Link>
          </li>
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded " aria-current="page" to={'/product'}>Product</Link>
          </li>
          
          <li className="nav-item mx-0 mx-lg-1">
            <Link className="nav-link py-3 px-0 px-lg-3 rounded " aria-current="page" to={'/addproduct'}>Add Product</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>  )
}
