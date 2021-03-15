import React from 'react';
import { connect } from 'react-redux';
import { IMeeting, fetchMeetings } from '../../redux/actions';
import { StoreState } from '../../redux/reducers';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';

const _CalendarView = () => {
  return <Container>Calendar coming soon</Container>;
};

const mapStateTopProps = (state: StoreState): { meetings: IMeeting[] } => {
  return { meetings: state.meetings };
};
export const CalendarView = connect(mapStateTopProps, { fetchMeetings })(
  _CalendarView
);
