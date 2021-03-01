import { ITruck, TruckAction, ActionTypes } from '../actions';

export const trucksReducer = (state: ITruck[] = [], action: TruckAction) => {
  switch (action.type) {
    case ActionTypes.fetchTrucks: {
      return action.payload;
    }
    // case ActionTypes.postNewAccount: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
};
