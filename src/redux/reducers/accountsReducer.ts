import { IAccount, AccountAction, ActionTypes } from '..//actions';

export const accountsReducer = (
  state: IAccount[] = [],
  action: AccountAction
) => {
  switch (action.type) {
    case ActionTypes.fetchAccounts: {
      return action.payload;
    }
    // case ActionTypes.postNewAccount: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
};
