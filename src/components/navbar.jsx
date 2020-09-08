import React, { Component } from "react";
import logo from "./Stunning-Project/stunning-logo.png";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navigation">
        <img src={logo} alt="Stunning-logo" />
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
        </div>
        <button className="btn">Your Account</button>
        <div className="hamberger">
          <i class="fas fa-bars"></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
