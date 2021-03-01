import baseURL from '../../api/BaseInstance';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export type RouteAction = IFetchRoutesAction | IPostRouteAction;

export interface IRoute {
  _id: string;
  group_id: string;
  truck_id: string;
  is_active: boolean;
  route_stage: string;
  start_location: string;
  driver: string;
  truck_vin: string;
  service_stop: [string];
  time: Date;
  notes: [string];
}

export interface IFetchRoutesAction {
  type: ActionTypes.fetchRoutes;
  payload: IRoute[];
}

export interface IPostRouteAction {
  type: ActionTypes.postNewRoute;
  payload: IRoute[];
}

export const fetchRoutes = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.get<IRoute[]>('/routes', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IFetchRoutesAction>({
      type: ActionTypes.fetchRoutes,
      payload: response.data.data,
    });
  };
};

export const postRoute = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.post<IRoute[]>('/routes', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IPostRouteAction>({
      type: ActionTypes.postNewRoute,
      payload: response.data,
    });
  };
};
