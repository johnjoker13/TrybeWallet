import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunkCurrency from '../actions/index';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select/Select';
import { paymentMethod, tagType } from '../data/data';
import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: '0',
        currency: '',
        method: 'Dinheiro',
        description: '',
        tag: 'Alimentaçaõ',
      },
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      expenses: { ...prevState.expenses, [name]: value },
    }));
  }

  render() {
    const { gatheredCurrencies } = this.props;
    const { expenses: {
      value,
      description,
      currency,
      method,
      tag,
    } } = this.state;
    return (
      <div>
        <Header />
        <Form formClassName="form__container" onSubmitForm={ () => {} }>
          <Input
            labelId="value-input"
            labelText="Valor: "
            testId="value-input"
            inputType="number"
            inputName="value"
            inputValue={ value }
            className="form__item"
            onChange={ this.handleChange }
          />

          <Select
            selectLabel="currency-input"
            selectText="Moeda: "
            selectName="currency"
            selectTestId="currency-input"
            selectClass="form__item"
            slcValue={ currency }
            onChange={ this.handleChange }
            optionsArray={ gatheredCurrencies }
          />

          <Select
            selectLabel="method-input"
            selectText="Método de pagamento: "
            selectName="method"
            selectTestId="method-input"
            selectClass="form__item"
            slcValue={ method }
            onChange={ this.handleChange }
            optionsArray={ paymentMethod }
          />

          <Select
            selectLabel="tag-input"
            selectText="Categoria: "
            selectName="tag"
            selectTestId="tag-input"
            selectClass="form__item"
            slcValue={ tag }
            onChange={ this.handleChange }
            optionsArray={ tagType }
          />

          <Input
            labelId="description-input"
            labelText="Descrição: "
            testId="description-input"
            inputType="text"
            inputName="description"
            inputValue={ description }
            className="form__item"
            onChange={ this.handleChange }
          />
          <Button
            btnText="Adicionar Despesa"
            btnClass="form__button"
            typeBtn="submit"
          />
        </Form>
      </div>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  gatheredCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  gatheredCurrencies: state.wallet.currencies,
  getQuotation: state.wallet.quotation,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(thunkCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
