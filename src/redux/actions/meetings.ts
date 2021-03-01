import baseURL from '../../api/BaseInstance';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export type MeetingAction = IFetchMeetingsAction | IPostMeetingAction;

export interface IMeeting {
  _id: string;
  title: string;
  meeting_time: string;
  account_id: {
    _id: string;
    account_name: string;
  };
  contact_id: string;
  location_name: string;
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  owner_id: string;
}

export interface IFetchMeetingsAction {
  type: ActionTypes.fetchMeetings;
  payload: IMeeting[];
}

export interface IPostMeetingAction {
  type: ActionTypes.postNewMeeting;
  payload: IMeeting[];
}

export const fetchMeetings = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.get<IMeeting[]>('/meetings', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IFetchMeetingsAction>({
      type: ActionTypes.fetchMeetings,
      payload: response.data.data,
    });
  };
};

export const postMeeting = () => {
  return async (dispatch: Dispatch) => {
    const response: any = await baseURL.post<IMeeting[]>('/meetings', {
      headers: {
        'x-access-token': process.env.REACT_APP_ACCESS_TOKEN,
      },
    });
    dispatch<IPostMeetingAction>({
      type: ActionTypes.postNewMeeting,
      payload: response.data,
    });
  };
};
