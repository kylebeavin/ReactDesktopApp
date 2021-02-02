import { IAccount, IFetchAccountsAction, ActionTypes } from '../actions';

export const accountsReducer = (
  state: IAccount[] = [],
  action: IFetchAccountsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchAccounts:
      return action.payload.filter(function (filteredAccounts) {
        return filteredAccounts.stage === 'account';
      });
    default:
      return state;
  }
};
