import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Flags = () => {

    return (
        <Dropdown className="nav-item dropdown select-flag">
            <Dropdown.Toggle className="nav-link dropdown-toggle active" id="navbarDropdown0"  variant="link" >
                <span className="flag-icon flag-icon-in" />
            </Dropdown.Toggle>
            <Dropdown.Menu aria-labelledby="navbarDropdown0">
                <Dropdown.Item><span className="flag-icon flag-icon-in" /> <span className="ml-2">India</span></Dropdown.Item>
                <Dropdown.Item><span className="flag-icon flag-icon-us" /> <span className="ml-2">United States</span></Dropdown.Item>
                <Dropdown.Item><span className="flag-icon flag-icon-za" /> <span className="ml-2">South Africa</span></Dropdown.Item>
                <Dropdown.Item><span className="flag-icon flag-icon-au" /> <span className="ml-2">Australia</span></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

}

export default Flags;