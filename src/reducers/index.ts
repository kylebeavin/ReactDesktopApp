import { combineReducers } from 'redux';
import { accountsReducer } from './accountsReducer';
import { IAccount } from '../actions';

export interface StoreState {
  accounts: IAccount[];
}

export default combineReducers<StoreState>({
  accounts: accountsReducer,
});
