import React from 'react';
import Account from './Account';
//Bootstrap Imports
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';




const AccountList = () => {

  return (
    <section>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th><Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group></th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Owner</th> */}
            <th>Stage</th>
          </tr>
        </thead>
        <tbody>
          <Account />
        </tbody>
      </Table>

    </section>
  );
}



export default AccountList;