// Coloque aqui suas actions
import fetchApi from '../services';

export const LOGIN = 'LOGIN';
export const FETCH_SUCCESS = 'FETCH__SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const OBJ_KEYS = 'OBJ_KEYS';

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
