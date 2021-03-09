export {};

// import baseURL from '../../api/BaseInstance';
// import { Dispatch } from 'redux';
// import { ActionTypes } from './types';

// export type AuthAction =
//   | ILoadUserAction
//   | IUserLoginAction
//   | IUserRegisterAction;

// export type AuthAction = ILoadUserAction;
// export type LoginAction = IUserLoginAction | IUserRegisterAction;

// export interface IAuth {
//   token: string;
//   isAuthenticated: boolean;
//   loading: boolean;
//   user: {};
// }

// export interface ILoadUserAction {
//   type: ActionTypes.userLoaded | ActionTypes.authError;
//   payload: IAuth[];
// }

// export interface IUserLoginAction {
//   type: ActionTypes.userLoginSuccess | ActionTypes.userLoginFail;
//   payload: any;
// }

// export interface IUserRegisterAction {
//   type: ActionTypes.registerSuccess | ActionTypes.registerFail;
//   payload: any;
// }

// Load User
// export const loadUser = () => async (dispatch: Dispatch) => {
//   if (sessionStorage.sessionToken) {
//     setAuthToken(sessionStorage.sessionToken);
//   }
//   try {
//     const response = await baseURL.post('/auth');
//     dispatch({
//       type: ActionTypes.userLoaded,
//       payload: response.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: ActionTypes.authError,
//     });
//   }
// };

// export const login = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response: any = await baseURL.post('/login', {
//         headers: {
//           'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
//         },
//       });
//       dispatch({
//         type: ActionTypes.userLoginSuccess,
//         payload: response.data.data,
//       });
//     } catch (error) {}
//   };
// };
