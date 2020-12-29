import React, { Component } from 'react';
import './App.css';
import { MainNav } from './components/Nav';
import PageTitleArea from './components/PageTitleArea';
import CRMTabView from './components/CRMTabView';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <MainNav />
          <PageTitleArea />
          <CRMTabView />
        </Container>
      </div>
    );
  }
}
