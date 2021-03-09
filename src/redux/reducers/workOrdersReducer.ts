import { IWorkOrder, WorkOrderAction, ActionTypes } from '../actions';

export const workOrdersReducer = (
  state: IWorkOrder[] = [],
  action: WorkOrderAction
) => {
  switch (action.type) {
    case ActionTypes.fetchWorkOrders: {
      return action.payload;
    }
    // case ActionTypes.postNewAccount: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
};
