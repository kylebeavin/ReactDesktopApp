import React from 'react';
import Meeting from './Meeting';
//Bootstrap Imports
import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';




const MeetingList = () => {

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Time</th>
          <th>Account</th>
          <th>Contact</th>
          <th>Location</th>
          <th>Address</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody>
        <Meeting />
      </tbody>
    </Table>

  );
}



export default MeetingList;