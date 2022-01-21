import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { typeBtn, buttonDisabled, onClick, btnText, btnClass, btnId } = this.props;
    return (
      <button
        data-testid={ btnId }
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
  btnId: '',
  buttonDisabled: false,
  onClick: () => {},
  btnText: '',
  btnClass: '',
  typeBtn: '',
};

Button.propTypes = {
  btnId: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  btnText: PropTypes.string,
  btnClass: PropTypes.string,
  typeBtn: PropTypes.string,
};

export default Button;
