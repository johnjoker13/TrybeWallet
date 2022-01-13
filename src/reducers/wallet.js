import { FETCH_SUCCESS, OBJ_KEYS, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  quotation: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      quotation: [action.currency],
    };
  case OBJ_KEYS:
    return {
      ...state,
      currencies: [...action.keys],
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default walletReducer;
