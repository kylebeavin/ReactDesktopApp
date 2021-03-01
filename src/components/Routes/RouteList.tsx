import React from 'react';
import { Route } from './Route';

//Bootstrap Imports
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';

const RouteList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Truck</th>
          <th>Driver</th>
          <th>Start Location</th>
          <th>Service Stop</th>
          <th>Service Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Route />
      </tbody>
    </Table>
  );
};
export default RouteList;
