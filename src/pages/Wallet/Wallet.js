import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
      moeda: ['BRL'],
      metodo: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      tag: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
    } = this.state;

    return (
      <div>
        <Header />
        <Form
          valor={ valor }
          descricao={ descricao }
          moeda={ moeda }
          metodo={ metodo }
          tag={ tag }
          onChange={ () => {} }
          onClick={ this.onSubmit }
        />
      </div>
    );
  }
}

export default Wallet;
