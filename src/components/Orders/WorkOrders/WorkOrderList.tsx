import React from 'react';
import { WorkOrder } from './WorkOrder';

//Bootstrap Imports
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';

const WorkOrderList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Account</th>
          <th>Order Status</th>
          <th>Demand Rate</th>
          <th>Monthly Rate</th>
          <th>Term</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        <WorkOrder />
      </tbody>
    </Table>
  );
};
export default WorkOrderList;
