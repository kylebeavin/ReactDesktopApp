import React from 'react';
// import { useState } from 'react';
// import AccountList from './AccountList';
// import mockData from '../mockData.json';

//Bootstrap Imports
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';



const SearchInput = () => {

    /** const [searchString, setSearchString] = useState('');**/

    return (
        <div className={"SearchComponent"}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><BsSearch></BsSearch></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    placeholder="Search for an existing contact"
                    aria-label="Contact"
                    aria-describedby="basic-addon1"
                // onChange={event => { setSearchString(event.target.value) }}
                />

            </InputGroup>
        </div>
    )
}

export default SearchInput;

