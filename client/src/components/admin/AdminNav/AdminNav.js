import React from "react";
import {
    NavLink,
    DropdownItem,
} from 'reactstrap';

const AdminNav = (props) => 

{   return (<>
<DropdownItem>
    <NavLink href="/admin/dashboard">Dashboard</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/resources">Resources</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink href="/settings">Settings</NavLink>
</DropdownItem>
<DropdownItem>
    <NavLink onClick={props.logout}>Logout</NavLink>
</DropdownItem>
</>)
}

export default AdminNav;