import React from 'react';
import FilterButtons from './FilterButtons';
//Bootstrap Imports
import Button from 'react-bootstrap/Button';

//Icons
import { MdAddBox, } from 'react-icons/md';

const AccountListButtons = () => {
    return (
        <section className="ListButtonContainer">
            <Button className="ListButton" variant="outline-primary" size="sm">Show All</Button>
            <Button className="ListButton" variant="primary" size="sm">Owned By Me</Button>
            <Button className="ListButton" variant="outline-primary" size="sm">Unassigned</Button>
            <Button className="ListButton" variant="outline-success" size="sm"><MdAddBox></MdAddBox>Add View</Button>
            <Button className="ListButton" variant="success" size="sm">Schedule Demo</Button>
            <br />
            <FilterButtons />
            {/* Temporary placeholder Code below */}

            <br />
            <br />
            <br />
            <br />
            {/* End Temporary placeholder code */}
        </section>
    )
}

export default AccountListButtons;