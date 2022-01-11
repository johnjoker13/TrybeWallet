import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select/Select';

class Form extends Component {
  render() {
    const {
      valor,
      descricao,
      moeda,
      metodo,
      tag,
      onChange,
      onClick,
    } = this.props;
    return (
      <form>
        <fieldset>
          <Input
            labelId="value-input"
            labelText="Valor: "
            testId="value-input"
            inputType="number"
            inputName="valor"
            inputValue={ valor }
            className="form-item"
          />

          <Select
            selectLabel="currency-input"
            selectText="Moeda: "
            selectName="moeda"
            selectTestId="currency-input"
            selectClass="form-item"
            slcValue={ moeda[0] }
            onChange={ onChange }
            optionsArray={ moeda }
          />

          <Select
            selectLabel="method-input"
            selectText="Método de pagamento: "
            selectName="metodo"
            selectTestId="method-input"
            selectClass="form-item"
            slcValue={ metodo[0] }
            onChange={ onChange }
            optionsArray={ metodo }
          />

          <Select
            selectLabel="tag-input"
            selectText="Categoria: "
            selectName="categoria"
            selectTestId="tag-input"
            selectClass="form-item"
            slcValue={ tag[0] }
            onChange={ onChange }
            optionsArray={ tag }
          />

          <Input
            labelId="description-input"
            labelText="Descrição: "
            testId="description-input"
            inputType="text"
            inputName="descricao"
            inputValue={ descricao }
            className="form-item"
          />
          <Button
            onClick={ onClick }
            btnText="Adicionar Despesa"
            btnClass="form-button"
            typeBtn="submit"
          />
        </fieldset>
      </form>
    );
  }
}

Form.defaultProps = {
  valor: 0,
  descricao: '',
  moeda: [],
  metodo: [],
  tag: [],
  onChange: () => {},
  onClick: () => {},
};

Form.propTypes = {
  valor: PropTypes.number,
  descricao: PropTypes.string,
  moeda: PropTypes.arrayOf(PropTypes.string),
  metodo: PropTypes.arrayOf(PropTypes.element),
  tag: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Form;
