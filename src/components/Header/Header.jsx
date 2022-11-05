import React from "react";
import "./Header.scss";
import {Link} from 'react-router-dom'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header = (props) => {
  //debugger


  return (
    <header className="header">
      <HeaderMenu  />
      <HelloHeader />
    </header>
  );
};


const HelloHeader = (props) => {
  return (
  <div className="hero-step2">
      <div className="hero-step2__circle"><img className="hero-step2__circle-img" src={require('../../assets/img/type1_200px.png')} alt="xtall" /></div>
      <div className="hero-step2__circle"><img className="hero-step2__circle-img" src={require('../../assets/img/type2_200px.png')} alt="xtall" /></div>
      <div className="hero-step2__circle"><img className="hero-step2__circle-img" src={require('../../assets/img/type3_200px.png')} alt="xtall" /></div>

      <div className="hero-step2__circle"><img className="hero-step2__circle-img" src={require('../../assets/img/type4_200px.png')} alt="xtall" /></div>
      <div className="hero-step2__circle"><img className="hero-step2__circle-img" src={require('../../assets/img/type5_200px.png')} alt="xtall" /></div>

  </div>
  )
}

export default Header;
