import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <div className="logo">
      <NavLink to="/">PC Mourya</NavLink>
    </div>
  );
};

export default Logo;
