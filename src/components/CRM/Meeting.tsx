import React from 'react';
import { connect } from 'react-redux';
import { IMeeting, fetchMeetings } from '../../redux/actions';
import { StoreState } from '../../redux/reducers';

// //Bootstap Imports
import Form from 'react-bootstrap/Form';

interface IMeetingProps {
  meetings: IMeeting[];
  fetchMeetings: Function;
}

class _Meeting extends React.Component<IMeetingProps> {
  componentDidMount() {
    this.props.fetchMeetings();
  }
  renderMeetingList(): JSX.Element[] {
    return this.props.meetings.map((meeting: IMeeting) => {
      return (
        <tr key={meeting._id}>
          <td>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group>
          </td>
          <td>{meeting.title}</td>
          <td>{meeting.meeting_time}</td>
          <td>{meeting.account_id.account_name}</td>
          <td>{meeting.contact_id}</td>
          <td>{meeting.location_name}</td>
          <td>
            {meeting.address_street}
            <br />
            {meeting.address_city}, {meeting.address_state}{' '}
            {meeting.address_zip}
          </td>
          <td>{meeting.owner_id}</td>
        </tr>
      );
    });
  }

  render() {
    return this.renderMeetingList();
  }
}

const mapStateToProps = (state: StoreState): { meetings: IMeeting[] } => {
  return { meetings: state.meetings };
};

export const Meeting = connect(mapStateToProps, { fetchMeetings })(_Meeting);
