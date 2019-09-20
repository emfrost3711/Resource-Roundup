import React from "react";
import {
    NavLink,
    DropdownItem,
} from 'reactstrap';

const StudentNav = (props) => 

{   return (<>
<DropdownItem>
    <NavLink href="/student/dashboard" >Dashboard</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/student/resources" >Resources</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/profile">Settings</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink onClick={props.logout}>Logout</NavLink>
</DropdownItem>

</>)
}

export default StudentNav;