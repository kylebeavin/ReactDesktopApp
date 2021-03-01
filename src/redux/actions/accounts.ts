import baseURL from '../../api/BaseInstance';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export type AccountAction = IFetchAccountsAction | IPostAccountsAction;

export interface IAccount {
  _id: string;
  account_name: string;
  email: string;
  stage: string;
  owner_id: string;
  owner_name: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
}

export interface IFetchAccountsAction {
  type: ActionTypes.fetchAccounts;
  payload: IAccount[];
}

export interface IPostAccountsAction {
  type: ActionTypes.postNewAccount;
  payload: IAccount[];
}

export const fetchAccounts = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.get<IAccount[]>('/accounts', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IFetchAccountsAction>({
      type: ActionTypes.fetchAccounts,
      payload: response.data.data,
    });
  };
};

export const postAccount = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.post<IAccount[]>('/accounts', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IPostAccountsAction>({
      type: ActionTypes.postNewAccount,
      payload: response.data,
    });
  };
};
