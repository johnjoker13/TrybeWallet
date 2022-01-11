import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelId,
      labelText,
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
        { labelText }
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
  labelText: '',
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
  labelText: PropTypes.string,
  testId: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceHolder: PropTypes.string,
  inputName: PropTypes.string,
  inputValue: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
