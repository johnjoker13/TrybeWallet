import {
  FETCH_SUCCESS,
  OBJ_KEYS,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from '../actions';

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
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...action.payload],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: [...action.id],
    };
  default:
    return state;
  }
};

export default walletReducer;
