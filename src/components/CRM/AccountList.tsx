import React from 'react';
import { Account } from './Account';

//Bootstrap Imports
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';

const AccountList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
          <th>Stage</th>
          <th>Adddress</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody>
        <Account />
      </tbody>
    </Table>
  );
};
export default AccountList;
