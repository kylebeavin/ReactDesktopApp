import React from 'react';
import './App.css';
import { MainNav } from './components/Nav';
import ContactList from './components/ContactList';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';


export const App = () => {
  return (
    <div className="App">
      <Container fluid="md">
        <MainNav />
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
