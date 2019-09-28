import React, { Component } from "react";
import "./TopNav.scss";
import API from "../../utils/API";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import StudentNav from "../student/StudentNav"
import AdminNav from "../admin/AdminNav";

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            loggedIn: false,
            admin: false
        };
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            console.log(user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    admin: true
                });
            }
        }).catch(err => {
            console.log(err);
        });

        API.isStudentLoggedIn().then(user => {
            console.log(user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true
                });
            }
        }).catch(err => {
            console.log(err);
        });
    }

    logout() {
        API.logout().then((data)=> {
            window.location.pathname = "/"
        }).catch((err)=> {
            console.log(err)
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/" className="titleFont"></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/"><i className="fas fa-home dark-text"></i></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fas fa-user dark-text"></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {this.state.loggedIn && this.state.admin ? (
                                       <AdminNav
                                            logout= {this.logout}
                                       />
                                    ) : this.state.loggedIn && !this.state.admin ? 
                                        <StudentNav
                                            logout= {this.logout}
                                            />
                                    : (
                                        <>
                                            <DropdownItem>
                                                <NavLink href="/login">login</NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink href="/signup">signup</NavLink>
                                            </DropdownItem>
                                        </>
                                    )}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}