import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../../assets/money-icon.png';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    this.sumAllExpenses();
  }

  sumAllExpenses = () => {
    const { getAllExpenses } = this.props;
    if (getAllExpenses.length !== 0) {
      const sumExpenses = getAllExpenses.reduce((acc, curr) => {
        if (curr.currency
          === curr.exchangeRates[curr.currency].code) {
          acc
            += (Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
            );
          return acc;
        }
        return acc;
      }, 0);
      return sumExpenses;
    }
    return 0;
  }

  render() {
    const { userMail } = this.props;
    const total = this.sumAllExpenses();
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
            { total > 0 ? total.toFixed(2) : '0.00' }
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
  getAllExpenses: [{}],
};

Header.propTypes = {
  userMail: PropTypes.string,
  getAllExpenses: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = (state) => ({
  userMail: state.user.email,
  getAllExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
