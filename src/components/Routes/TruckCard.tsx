import React from 'react';
import { connect } from 'react-redux';
import { ITruck, fetchTrucks } from '../../redux/actions';
import { StoreState } from '../../redux/reducers';

// //Bootstap Imports
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface ITruckProps {
  trucks: ITruck[];
  fetchTrucks: Function;
}

class _TruckCard extends React.Component<ITruckProps> {
  componentDidMount() {
    this.props.fetchTrucks();
  }
  renderTruckList(): JSX.Element[] {
    return this.props.trucks.map((truck: ITruck) => {
      return (
        <div className="truckCard" key={truck._id}>
          <h3 className="truckCardTitle">{truck.name}</h3>
          <p>{truck.vin}</p>
          <p>{truck.ownership}</p>
          <Button className="truckCardButton" variant="info" size="sm">
            More Details
          </Button>
        </div>
        // <tr key={truck._id}>
        //   <td>
        //     <Form.Group controlId="formBasicCheckbox">
        //       <Form.Check type="checkbox" />
        //     </Form.Group>
        //   </td>
        //   <td>{truck.name}</td>
        //   <td>{truck.ownership}</td>
        //   <td>{truck.year}</td>
        //   <td>{truck.vehicle_make}</td>
        //   <td>{truck.vehicle_model}</td>
        //   <td>{truck.vehicle_type}</td>
        // </tr>
      );
    });
  }

  render() {
    return this.renderTruckList();
  }
}

const mapStateToProps = (state: StoreState): { trucks: ITruck[] } => {
  return { trucks: state.trucks };
};

export const TruckCard = connect(mapStateToProps, { fetchTrucks })(_TruckCard);
