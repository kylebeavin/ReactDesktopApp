import React from 'react';
import './App.css';
import { MainNav } from './components/Nav';
import ContactList from './components/ContactList';


export const App = () => {
  return (
    <div className="App">
      <MainNav />
      <ContactList />
    </div>
  );
}

export default App;
