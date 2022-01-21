import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Table.css';
import { deleteExpense } from '../../actions';
import Button from '../Button';

class Table extends Component {
  setExpense = (id) => {
    const { removeExpense, getExpenses } = this.props;
    removeExpense(getExpenses.filter((item) => item.id !== id));
  }

  render() {
    const { getExpenses, handleEdit } = this.props;
    return (
      <table className="table__container">
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>

        {getExpenses.length !== 0 && getExpenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {Number(expense.exchangeRates[expense.currency].ask
                * expense.value).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <Button
                btnId="edit-btn"
                onClick={ () => handleEdit(expense.id) }
                typeBtn="button"
                btnText="Editar"
              />
              <Button
                btnId="delete-btn"
                onClick={ () => this.setExpense(expense.id) }
                typeBtn="button"
                btnText="Excluir"
              />
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

Table.propTypes = {
  getExpenses: PropTypes.arrayOf(PropTypes.object),
  handleEdit: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (expense) => dispatch(deleteExpense(expense)),
});

const mapStateToProps = (state) => ({
  getExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
