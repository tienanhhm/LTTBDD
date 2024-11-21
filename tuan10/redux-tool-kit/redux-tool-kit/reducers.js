// reducers.js
import { SET_USER_NAME, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DELETE_ITEM } from './actions';

const initialState = {
  userName: '',
  data: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;