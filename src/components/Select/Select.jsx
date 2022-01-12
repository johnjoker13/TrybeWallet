import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      selectLabel,
      selectText,
      selectName,
      selectTestId,
      selectClass,
      slcValue,
      onChange,
      optionsArray,
    } = this.props;
    return (
      <label htmlFor={ selectLabel }>
        { selectText }
        <select
          name={ selectName }
          data-testid={ selectTestId }
          className={ selectClass }
          value={ slcValue }
          onChange={ onChange }
        >
          {optionsArray.map((item) => (
            <option data-testid={ item } key={ item } value={ item }>{item}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  selectLabel: '',
  selectText: '',
  selectName: '',
  selectTestId: '',
  selectClass: '',
  slcValue: '',
  onChange: () => {},
  optionsArray: [],
};

Select.propTypes = {
  selectLabel: PropTypes.string,
  selectText: PropTypes.string,
  selectName: PropTypes.string,
  selectTestId: PropTypes.string,
  selectClass: PropTypes.string,
  slcValue: PropTypes.string,
  onChange: PropTypes.func,
  optionsArray: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
