import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";


const HeaderMenu = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="top-nav">
      <div className="top-nav-logo-name">
        <img
          src={require("../../../assets/img/nav-logo.png")}
          alt=""
          className="top-nav-logo"
        />
        <div className="top-nav-name">Xtal Ball Enterprise</div>
      </div>
      <input id="menu-toggle" type="checkbox" 
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu" onClick={() => setIsChecked((prev) => !prev)} >
        <li>Homepage</li>
        <li>Create your generator</li>
        <li>About Us</li>
        <li>
          <NavLink to="./gen_models_hello">Model Types</NavLink>
        </li>
        <li>
          <NavLink to="./specification">Specification Form</NavLink>
        </li>        
        <li>
          <NavLink to="./xtest">Test Page</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default HeaderMenu;
