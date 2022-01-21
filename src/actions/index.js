// Coloque aqui suas actions
import fetchApi from '../services';

export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS = 'FETCH__SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const OBJ_KEYS = 'OBJ_KEYS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const loginUser = (email) => ({
  type: LOGIN,
  email,
});

export const fetchSuccess = (currency) => ({
  type: FETCH_SUCCESS,
  currency,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  error,
});

export const getObjKeys = (keys) => ({
  type: OBJ_KEYS,
  keys,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  id,
});

const thunkCurrency = () => async (dispatch) => {
  try {
    const response = await fetchApi();
    const data = await response;
    dispatch(fetchSuccess(data));
    dispatch(getObjKeys(Object.keys(data).filter((x) => x !== 'USDT')));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export default thunkCurrency;
