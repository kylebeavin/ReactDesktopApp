import React from 'react';
import '../styles/contactList.css';
import Table from 'react-bootstrap/Table';


const ContactList = () => {

  // let state = {
  //   contacts: [
  //     { id: 1, name: 'Customer1', email: 'test@test.com', phone: '317-111-1111', status: "active" },
  //     { id: 2, name: 'Customer2', email: 'tester@tester.com', phone: '317-222-2222', status: "active" },
  //     { id: 3, name: 'Customer3', email: 'testing@testing.com', phone: '317-333-3333', status: "active" }
  //   ]
  // }

  return (
    <section>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <Contact name='David Graber' email='test@test.com' phone={317000000} owner='TCMC' status='InActive' />
          <Contact name='Kyle Beavin' email='tester@tester.com' phone={3171111111} owner='TCMC' status='Active' />
          <Contact name='Alec Davidson' email='testing@testing.com' phone={3172222222} owner='TCMC' status='Active' />
          <Contact name='Casey Beckner' email='testee@testee.com' phone={317333333} owner='TCMC' status='Active' />
          <Contact name='Justin Forrestal' email='testo@testo.com' phone={3174444444} owner='TCMC' status='Active' />
          <Contact name='Chase Allen' email='testu@testu.com' phone={3175555555} owner='TCMC' status='Active' />
        </tbody>
      </Table>

    </section>
  );
}

const Contact = (props: { name: React.ReactNode; email: React.ReactNode; phone: React.ReactNode; owner: React.ReactNode; status: React.ReactNode; }) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.owner}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default ContactList;