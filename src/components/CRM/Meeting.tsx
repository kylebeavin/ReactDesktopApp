import React from 'react';
import { connect } from 'react-redux';
import { IMeeting, fetchMeetings } from '../../redux/actions';
import { StoreState } from '../../redux/reducers';
// import { getDateStringsFromDate } from '../../utils/Helpers';
import { FaEdit } from 'react-icons/fa';

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
        <div className="meetingCard" key={meeting._id}>
          <h3>{meeting.title}</h3>
          <p>{meeting.meeting_time}</p>
          <h4>{meeting.account_id.account_name}</h4>
          <p>{meeting.contact_id}</p>
          <p>{meeting.location_name}</p>
          <button>
            <FaEdit /> Edit
          </button>
        </div>
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
