import { combineReducers } from 'redux';
import { IAccount, IMeeting, IRoute, ITruck } from '../actions';
import { accountsReducer } from './accountsReducer';
import { meetingsReducer } from './meetingsReducer';
import { routesReducer } from './routesReducer';
import { trucksReducer } from './trucksReducer';

export interface StoreState {
  accounts: IAccount[];
  meetings: IMeeting[];
  routes: IRoute[];
  trucks: ITruck[];
}

export default combineReducers<StoreState>({
  accounts: accountsReducer,
  meetings: meetingsReducer,
  routes: routesReducer,
  trucks: trucksReducer,
});
