import { FETCH_SUCCESS, OBJ_KEYS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
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
  default:
    return state;
  }
};

export default walletReducer;
