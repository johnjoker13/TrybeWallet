import React from 'react';
import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../../assets/wallet-icon.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { loginUser } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  verifyFields = () => {
    const { email, password } = this.state;
    const minLen = 6;
    if (email === 'alguem@email.com' && password.length >= minLen) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyFields());
  }

  logInUser = (event) => {
    event.preventDefault();
    const { history, sendMail } = this.props;
    const { email } = this.state;
    sendMail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <section className="login__container">
        <section className="login__form">
          <figure className="login__form__img__container">
            <img src={ wallet } alt="wallet" className="login__form__img" />
            <figcaption className="login__form__img__caption">Trybe Wallet</figcaption>
          </figure>
          <section className="login__fields">
            <Input
              labelId="email-input"
              testId="email-input"
              inputType="email"
              inputPlaceHolder="Email"
              inputName="email"
              inputValue={ email }
              onChange={ this.handleChange }
              className="login__fields__input"
            />
            <Input
              labelId="password-input"
              testId="password-input"
              inputType="password"
              inputPlaceHolder="Senha"
              inputName="password"
              inputValue={ password }
              onChange={ this.handleChange }
              className="login__fields__input"
            />
            <Button
              onClick={ this.logInUser }
              buttonDisabled={ isDisabled }
              btnClass="login__fields__button"
              btnText="Entrar"
              typeBtn="submit"
            />
          </section>
        </section>
      </section>
    );
  }
}

Login.propTypes = {
  sendMail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

Login.defaultProps = {
  history: {},
};

const mapDispatchToProps = (dispatch) => ({
  sendMail: (email) => dispatch(loginUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
