import * as React from 'react';
import './Xtest.scss'

import { slide as Menu } from 'react-burger-menu'

const Test =() => {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={'true'} />
      <div id="page-wrap">
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );

}

const Sidebar = props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
}

export default Test