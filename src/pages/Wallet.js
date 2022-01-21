import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import thunkCurrency, { addExpense, editExpense } from '../actions/index';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select/Select';
import { paymentMethod, tagType } from '../data/data';
import './Wallet.css';
import Table from '../components/Table/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: {
        id: 0,
        value: 0,
        currency: 'USD',
        method: 'Dinheiro',
        description: '',
        tag: 'Alimentação',
      },
      shouldEdit: false,
    };
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  onSubmitNewExpense = (event) => {
    event.preventDefault();
    const { addNewExpense, getQuotation, getCurrency } = this.props;
    const { expenses, shouldEdit } = this.state;
    getCurrency();
    this.setState((prevState) => ({
      expenses: {
        id: prevState.expenses.id + 1,
        value: 0,
        currency: '',
        method: 'Dinheiro',
        description: '',
        tag: 'Alimentação',
      },
    }));
    if (!shouldEdit) {
      addNewExpense({ ...expenses, exchangeRates: getQuotation[0] });
    } else {
      this.setExpenseEdition(expenses.id);
      this.setState({ shouldEdit: !shouldEdit });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      expenses: { ...prevState.expenses, [name]: value },
    }));
  }

  editExpense = (id) => {
    const { shouldEdit } = this.state;
    const { getAllExpenses } = this.props;
    const getExpense = getAllExpenses.find((x) => x.id === id);
    this.setState({
      expenses: {
        id: getExpense.id,
        value: getExpense.value,
        currency: getExpense.currency,
        method: getExpense.method,
        description: getExpense.description,
        tag: getExpense.tag,
      },
      shouldEdit: !shouldEdit,
    });
  }

  setExpenseEdition = (id) => {
    const { putExpense, getAllExpenses } = this.props;
    const { expenses } = this.state;
    const findById = getAllExpenses.findIndex((index) => index.id === id);
    console.log(findById);
    const { exchangeRates } = getAllExpenses[findById];
    getAllExpenses[findById] = { ...expenses, exchangeRates };
    putExpense(getAllExpenses);
  }

  render() {
    const { allCurrencies } = this.props;
    const { expenses: {
      value,
      description,
      currency,
      method,
      tag,
    },
    shouldEdit,
    } = this.state;
    return (
      <div>
        <Header />
        <Form formClassName="form__container" onSubmitForm={ this.onSubmitNewExpense }>
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
            selectId="currency-input"
            selectClass="form__item"
            slcValue={ currency }
            onChange={ this.handleChange }
            optionsArray={ allCurrencies }
          />

          <Select
            selectLabel="method-input"
            selectText="Método de pagamento: "
            selectName="method"
            selectTestId="method-input"
            selectId="method-input"
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
            selectId="tag-input"
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
          {!shouldEdit
            ? <Button btnText="Adicionar Despesa" typeBtn="submit" />
            : <Button btnText="Editar despesa" typeBtn="submit" />}
        </Form>
        <Table handleEdit={ this.editExpense } />
      </div>
    );
  }
}

Wallet.defaultProps = {
  addNewExpense: () => {},
  getQuotation: [],
};

Wallet.propTypes = {
  getCurrency: PropTypes.func,
  addNewExpense: PropTypes.func,
  allCurrencies: PropTypes.arrayOf(PropTypes.object),
  getQuotation: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.currencies,
  getQuotation: state.wallet.quotation,
  getAllExpenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(thunkCurrency()),
  addNewExpense: (e) => dispatch(addExpense(e)),
  putExpense: (exp) => dispatch(editExpense(exp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
