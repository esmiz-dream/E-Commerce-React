import React, { Component } from "react";
import { Link } from "react-router-dom";
import {ButtonContainer} from './button'
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <i className="fas fa-home"> </i>
                {"  "}|
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {}
                About
              </Link>
            </li>
          </ul>

          <Link className=" ml-auto" to="/cart" style={{ color: "white" }}>
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-shopping-cart"></i>
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;


