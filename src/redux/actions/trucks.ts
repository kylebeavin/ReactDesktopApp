import baseURL from '../../api/BaseInstance';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export type TruckAction = IFetchTrucksAction | IPostTruckAction;

export interface ITruck {
  _id: string;
  group_id: string;
  body_subtype: string;
  body_type: string;
  color: string;
  documents: [];
  is_active: boolean;
  license_number: string;
  msrp: string;
  odo: [];
  operator: string;
  ownership: string;
  pictures: [];
  service_history: [];
  service_status: [];
  trim: string;
  registration: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_type: [];
  year: string;
  hours: string;
  name: string;
  vin: string;
}

export interface IFetchTrucksAction {
  type: ActionTypes.fetchTrucks;
  payload: ITruck[];
}

export interface IPostTruckAction {
  type: ActionTypes.postNewTruck;
  payload: ITruck[];
}

export const fetchTrucks = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.get<ITruck[]>('/trucks', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IFetchTrucksAction>({
      type: ActionTypes.fetchTrucks,
      payload: response.data.data,
    });
  };
};

export const postTruck = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.post<ITruck[]>('/trucks', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IPostTruckAction>({
      type: ActionTypes.postNewTruck,
      payload: response.data,
    });
  };
};
