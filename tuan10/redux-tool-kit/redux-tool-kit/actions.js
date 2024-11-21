// actions.js
export const SET_USER_NAME = 'SET_USER_NAME';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const DELETE_ITEM = 'DELETE_ITEM';

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

// Thunk to fetch data
export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh');
      const jsonData = await response.json();
      dispatch(fetchDataSuccess(jsonData));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};