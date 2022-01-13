import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      selectLabel,
      selectText,
      selectName,
      selectTestId,
      selectId,
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
          id={ selectId }
          className={ selectClass }
          value={ slcValue }
          onChange={ onChange }
        >
          { optionsArray.length !== 0 && optionsArray.map((code) => (
            <option
              key={ `currency-${code}` }
              value={ code }
              data-testid={ code }
            >
              {code}
            </option>
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
  selectId: '',
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
  selectId: PropTypes.string,
  selectClass: PropTypes.string,
  slcValue: PropTypes.string,
  onChange: PropTypes.func,
  optionsArray: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
