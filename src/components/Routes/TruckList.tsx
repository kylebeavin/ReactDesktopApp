import React from 'react';
import { TruckCard } from './TruckCard';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
// import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';

const TruckList = () => {
  return (
    <Container fluid className="containerFluid">
      <div className="truckCardContainer">
        <TruckCard />
      </div>
    </Container>
  );
};
export default TruckList;
