import { combineReducers } from 'redux';
import { IAccount, IMeeting, IRoute, ITruck, IWorkOrder } from '../actions';
import { authReducer } from './authReducer';
import { accountsReducer } from './accountsReducer';
import { meetingsReducer } from './meetingsReducer';
import { routesReducer } from './routesReducer';
import { trucksReducer } from './trucksReducer';
import { workOrdersReducer } from './workOrdersReducer';

export interface StoreState {
  auth: any;
  accounts: IAccount[];
  meetings: IMeeting[];
  routes: IRoute[];
  trucks: ITruck[];
  workOrders: IWorkOrder[];
}

export default combineReducers<StoreState>({
  auth: authReducer,
  accounts: accountsReducer,
  meetings: meetingsReducer,
  routes: routesReducer,
  trucks: trucksReducer,
  workOrders: workOrdersReducer,
});
