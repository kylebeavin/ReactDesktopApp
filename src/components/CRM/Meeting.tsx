import React, { useState, useEffect } from 'react';
// import mockData from '../mockData.json';
import baseURL from '../../api/BaseInstance';

// //Bootstap Imports
import Form from 'react-bootstrap/Form';


interface IMeeting {
    _id: string;
    title: string;
    meeting_time: string;
    account_id: string;
    contact_id: string;
    location_name: string;
    address_street: string;
    address_city: string;
    address_state: string;
    address_zip: string;
    owner_id: string;
}

export const Meeting: any = () => {
    const [meetings, setMeetings] = useState([]);

    async function fetchMeetings() {
        const request = await baseURL.get('/meetings', {
            headers: {
                'x-access-token': process.env.REACT_APP_ACCESS_TOKEN
            }
        }).catch((err) => console.log("Error: ", err));
        if (request && request.data)
            setMeetings(request.data.data);
        return request;
    }

    useEffect(() => {
        fetchMeetings();
    }, [])

    // fetch(`https://smash-app-backend.herokuapp.com/api/meetings`)
    //     .then(res => res.json())
    //     .then((data) => setMeetings(data.data))
    return (
        meetings.map((meeting: IMeeting) => {

            return (

                <tr key={meeting._id}>
                    <td><Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>{meeting.title}</td>
                    <td>{meeting.meeting_time}</td>
                    <td>{meeting.account_id}</td>
                    <td>{meeting.contact_id}</td>
                    <td>{meeting.location_name}</td>
                    <td>
                        {meeting.address_street}
                        <br />
                        {meeting.address_city}, {meeting.address_state} {meeting.address_zip}
                    </td>
                    <td>{meeting.owner_id}</td>
                </tr >

            )
        })
    )
}

export default Meeting;