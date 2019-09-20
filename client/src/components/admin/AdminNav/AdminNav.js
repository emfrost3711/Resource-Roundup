import React from "react";
import {
    NavLink,
    DropdownItem,
} from 'reactstrap';

const AdminNav = (props) => 

{   return (<>
<DropdownItem>
    <NavLink href="/profile">Profile</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink onClick={props.logout}>Logout</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/resources">Resources</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/resources">Settings</NavLink>
</DropdownItem>
</>)
}

export default AdminNav;