import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      onSubmitForm,
      formClassName,
      children,
    } = this.props;
    return (
      <form onSubmit={ onSubmitForm } className={ formClassName }>
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmitForm: PropTypes.func,
  formClassName: PropTypes.string,
};

Form.defaultProps = {
  onSubmitForm: () => {},
  formClassName: '',
};

export default Form;
