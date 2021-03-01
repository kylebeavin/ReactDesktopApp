import React from 'react';

//Bootstrap Imports
import Button from 'react-bootstrap/Button';
import { BiSliderAlt } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const FilterButtons = () => {
  return (
    <div>
      <Button className="ListButton" variant="outline-info" size="sm">
        <BiSliderAlt></BiSliderAlt>Filter
      </Button>
      <br />
      <Button className="ListButtonFilter" variant="info" size="sm">
        <MdClose></MdClose>Filter 1
      </Button>
      <Button className="ListButtonFilter" variant="info" size="sm">
        <MdClose></MdClose>Filter 2
      </Button>
    </div>
  );
};
export default FilterButtons;
