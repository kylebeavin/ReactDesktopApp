import React from 'react';
import { connect } from 'react-redux';
import { IWorkOrder, fetchWorkOrders } from '../../../redux/actions';
import { StoreState } from '../../../redux/reducers';
// import { getDateStringsFromDate } from '../../../utils/Helpers';

// //Bootstap Imports
import Form from 'react-bootstrap/Form';

interface IWorkOrderProps {
  workOrders: IWorkOrder[];
  fetchWorkOrders: Function;
}

class _WorkOrder extends React.Component<IWorkOrderProps> {
  componentDidMount() {
    this.props.fetchWorkOrders();
  }
  renderWorkOrderList(): JSX.Element[] {
    return this.props.workOrders.map((workOrder: IWorkOrder) => {
      return (
        <tr key={workOrder._id}>
          <td>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group>
          </td>
          <td>{workOrder.account_id.account_name}</td>
          <td>{workOrder.order_status}</td>
          <td>{workOrder.demand_rate}</td>
          <td>{workOrder.monthly_rate}</td>
          <td>{workOrder.term_date}</td>
          <td>
            {workOrder.start_date}
            {/* {getDateStringsFromDate(workOrder.start_date).date}{' '}
            {getDateStringsFromDate(workOrder.start_date).time} */}
          </td>
          <td>
            {workOrder.end_date}
            {/* {getDateStringsFromDate(workOrder.end_date).date}{' '}
            {getDateStringsFromDate(workOrder.end_date).time} */}
          </td>
        </tr>
      );
    });
  }

  render() {
    return this.renderWorkOrderList();
  }
}

const mapStateToProps = (state: StoreState): { workOrders: IWorkOrder[] } => {
  return { workOrders: state.workOrders };
};

export const WorkOrder = connect(mapStateToProps, { fetchWorkOrders })(
  _WorkOrder
);
