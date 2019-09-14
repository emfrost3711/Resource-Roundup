import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class hamburgerMenuPage extends Component {
state = {
co  llapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <Router>
      <MDBContainer>
        <MDBNavbar color="bg-danger" style={{ marginTop: '20px' }} dark>
          <MDBContainer>
            <MDBNavbarBrand className="white-text">
              MDBNavbar
            </MDBNavbarBrand>
            <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger3.svg?color=00FBD8" onClick={this.toggleCollapse('navbarCollapse11')} />
            <MDBCollapse id="navbarCollapse11" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="AdminDash">Dashboard</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="AdminResource">Resources</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="Search">Search</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default hamburgerMenuPage;