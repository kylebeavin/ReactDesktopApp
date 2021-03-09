import baseURL from '../../api/BaseInstance';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export type WorkOrderAction = IFetchWorkOrdersAction | IPostWorkOrderAction;

export interface IWorkOrder {
  _id: string;
  group_id: string;
  is_active: boolean;
  is_demo: boolean;
  is_recurring: boolean;
  notes: [];
  services: [];
  service_days: [];
  service_per: [];
  order_status: string;
  url: [];
  account_id: {
    _id: string;
    account_name: string;
  };
  demand_rate: string;
  end_date: Date;
  monthly_rate: string;
  service_frequency: string;
  start_date: Date;
  term_date: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFetchWorkOrdersAction {
  type: ActionTypes.fetchWorkOrders;
  payload: IWorkOrder[];
}

export interface IPostWorkOrderAction {
  type: ActionTypes.postNewWorkOrder;
  payload: IWorkOrder[];
}

export const fetchWorkOrders = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.get<IWorkOrder[]>('/orders', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IFetchWorkOrdersAction>({
      type: ActionTypes.fetchWorkOrders,
      payload: response.data.data,
    });
  };
};

export const postTWorkOrder = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.post<IWorkOrder[]>('/orders', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IPostWorkOrderAction>({
      type: ActionTypes.postNewWorkOrder,
      payload: response.data,
    });
  };
};
