import { IRoute, RouteAction, ActionTypes } from '../actions';

export const routesReducer = (state: IRoute[] = [], action: RouteAction) => {
  switch (action.type) {
    case ActionTypes.fetchRoutes: {
      return action.payload;
    }
    // case ActionTypes.postNewAccount: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
};
