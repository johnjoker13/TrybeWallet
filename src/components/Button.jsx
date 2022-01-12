import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { typeBtn, buttonDisabled, onClick, btnText, btnClass } = this.props;
    return (
      <button
        type={ typeBtn ? 'submit' : 'button' }
        disabled={ buttonDisabled }
        onClick={ onClick }
        className={ btnClass }
      >
        { btnText }
      </button>
    );
  }
}

Button.defaultProps = {
  buttonDisabled: false,
  onClick: () => {},
  btnText: '',
  btnClass: '',
  typeBtn: '',
};

Button.propTypes = {
  buttonDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  btnText: PropTypes.string,
  btnClass: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default Button;
