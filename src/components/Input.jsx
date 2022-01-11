import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelId,
      testId,
      inputType,
      inputPlaceHolder,
      inputName,
      inputValue,
      onChange,
      className,
    } = this.props;
    return (
      <label htmlFor={ labelId }>
        <input
          data-testid={ testId }
          type={ inputType }
          placeholder={ inputPlaceHolder }
          name={ inputName }
          value={ inputValue }
          onChange={ onChange }
          className={ className }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  labelId: '',
  testId: '',
  inputType: '',
  inputPlaceHolder: '',
  inputName: '',
  inputValue: '',
  onChange: () => {},
  className: '',
};

Input.propTypes = {
  labelId: PropTypes.string,
  testId: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceHolder: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
