import { IMeeting, MeetingAction, ActionTypes } from '../actions';

export const meetingsReducer = (
  state: IMeeting[] = [],
  action: MeetingAction
) => {
  switch (action.type) {
    case ActionTypes.fetchMeetings: {
      return action.payload;
    }
    // case ActionTypes.postNewAccount: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
};
