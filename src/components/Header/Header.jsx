import React, { Component } from 'react';
import wallet from '../../assets/wallet-icon.svg';

class Header extends Component {
  render() {
    return (
      <header className="header__container">
        <figure className="header__img__container">
          <img className="header__img" src={ wallet } alt="logo" />
        </figure>
      </header>
    );
  }
}

export default Header;
