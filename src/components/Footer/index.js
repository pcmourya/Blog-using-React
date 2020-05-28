import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="subscribe">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
        <div className="foot">
          <ul>
            <li>
              <NavLink to="/">
                <span>
                  <i className="fas fa-home"></i>Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <i class="fas fa-address-card"></i>AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">
                <i class="fas fa-id-card-alt"></i>ContactUs
              </NavLink>
            </li>
          </ul>
          <NavLink to="/" className="alogo">
            PC Mourya
          </NavLink>
          <div>
            <a href="www.fackbook.com">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="www.fackbook.com">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="www.fackbook.com">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="www.fackbook.com">
              <i class="fab fa-google-play"></i>
            </a>
            <a href="https//www.github.com/pcmourya">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="copywrite">© Copyright in 2020</div>
      </div>
    );
  }
}

export default Footer;
