import React from 'react';


//Bootstrap Imports
import Button from 'react-bootstrap/Button';

//Icons
import { BiSliderAlt } from 'react-icons/bi';
import { MdAddBox, MdClose } from 'react-icons/md';

const AccountListButtons = () => {
    return (
        <section className="ListButtonContainer">
            <Button className="ListButton" variant="outline-primary" size="sm">Show All</Button>
            <Button className="ListButton" variant="primary" size="sm">Owned By Me</Button>
            <Button className="ListButton" variant="outline-primary" size="sm">Unassigned</Button>
            <Button className="ListButton" variant="outline-success" size="sm"><MdAddBox></MdAddBox>Add View</Button>
            <Button className="ListButton" variant="success" size="sm">Schedule Demo</Button>
            <br />
            <Button className="ListButton" variant="outline-info" size="sm"><BiSliderAlt></BiSliderAlt>Filter</Button>
            {/* Temporary placeholder Code below */}
            <Button className="ListButtonFilter" variant="info" size="sm"><MdClose></MdClose>Filter 1</Button>
            <Button className="ListButtonFilter" variant="info" size="sm"><MdClose></MdClose>Filter 2</Button>
            <br />
            <br />
            <br />
            <br />
            {/* End Temporary placeholder code */}
        </section>
    )
}

export default AccountListButtons;