import { ActionTypes } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.userLoaded:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case ActionTypes.registerSuccess:
    case ActionTypes.userLoginSuccess:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case ActionTypes.registerFail:
    case ActionTypes.userLoginFail:
    case ActionTypes.authError:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
