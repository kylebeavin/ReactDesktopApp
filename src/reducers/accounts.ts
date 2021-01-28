import { IAccount, IFetchAccountsAction, ActionTypes } from '../actions';

export const accountsReducer = (
  state: IAccount[] = [],
  action: IFetchAccountsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchAccounts:
      return action.payload;
    default:
      return state;
  }
};
