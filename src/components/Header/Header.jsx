import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../../assets/wallet-icon.svg';
import './Header.css';

class Header extends Component {
  render() {
    const currentValue = 0;
    const { userMail } = this.props;
    return (
      <header className="header__container">
        <figure className="header__img__container">
          <img className="header__img" src={ wallet } alt="logo" />
        </figure>
        <div className="header__info">
          <span
            data-testid="email-field"
            className="header__info__item"
          >
            { userMail }
          </span>
          <span
            data-testid="total-field"
            className="header__info__item"
          >
            {currentValue.toFixed(2)}
          </span>
          <span
            data-testid="header-currency-field"
            className="header__info__item"
          >
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  userMail: '',
};

Header.propTypes = {
  userMail: PropTypes.string,
};

const mapStateToProps = (state) => ({ userMail: state.user.email });

export default connect(mapStateToProps)(Header);
