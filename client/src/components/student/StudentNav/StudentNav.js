import React from "react";
import {
    NavLink,
    DropdownItem,
} from 'reactstrap';

const StudentNav = (props) => 

{   return (<>
<DropdownItem>
    <NavLink href="/profile">Profile</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink onClick={props.logout}>Logout</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/student/resources" >Resources</NavLink>
</DropdownItem>
</>)
}

export default StudentNav;