import React from 'react';

//Bootstrap Imports
import Button from 'react-bootstrap/Button';

//Icons
import { BiSliderAlt } from 'react-icons/bi';
import { MdAddBox, MdClose } from 'react-icons/md';


const CalendarList = () => {

    return (
        <section className="CalendarButtonContainer">
            <Button className="ListButton" variant="outline-primary" size="lg">All Contacts</Button>
            <Button className="ListButton" variant="primary" size="lg">My Contacts</Button>
            <Button className="ListButton" variant="outline-success" size="lg"><MdAddBox></MdAddBox>Add View</Button>
            <Button className="ListButton" variant="success" size="lg">Schedule Demo</Button>
            <br />
            <Button className="ListButton" variant="outline-info" size="lg"><BiSliderAlt></BiSliderAlt>Filter</Button>
            {/* Temporary placeholder Code below */}
            <Button className="ListButtonFilter" variant="info" size="sm"><MdClose></MdClose>Filter 1</Button>
            <Button className="ListButtonFilter" variant="info" size="sm"><MdClose></MdClose>Filter 2</Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* End Temporary placeholder code */}
        </section>
    )
}

export default CalendarList;