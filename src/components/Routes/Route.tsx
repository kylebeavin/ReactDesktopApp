import React from 'react';
import { connect } from 'react-redux';
import { IRoute, fetchRoutes } from '../../redux/actions';
import { StoreState } from '../../redux/reducers';

// //Bootstap Imports
import Form from 'react-bootstrap/Form';

interface IRouteProps {
  routes: IRoute[];
  fetchRoutes: Function;
}

class _Route extends React.Component<IRouteProps> {
  componentDidMount() {
    this.props.fetchRoutes();
  }
  renderRouteList(): JSX.Element[] {
    return this.props.routes.map((route: IRoute) => {
      return (
        <tr key={route._id}>
          <td>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group>
          </td>
          <td>{route.truck_id}</td>
          <td>{route.driver}</td>
          <td>{route.start_location}</td>
          <td>{route.service_stop}</td>
          <td>{route.time}</td>
          <td>{route.route_stage}</td>
        </tr>
      );
    });
  }

  render() {
    return this.renderRouteList();
  }
}

const mapStateToProps = (state: StoreState): { routes: IRoute[] } => {
  return { routes: state.routes };
};

export const Route = connect(mapStateToProps, { fetchRoutes })(_Route);
