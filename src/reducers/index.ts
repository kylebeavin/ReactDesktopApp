import { combineReducers } from 'redux';
import { accountsReducer } from './accounts';
import { IAccount } from '../actions';

export interface StoreState {
  accounts: IAccount[];
}

export default combineReducers<StoreState>({
  accounts: accountsReducer,
});
