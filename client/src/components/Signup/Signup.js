import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";
// import { threadId } from "worker_threads";

class Signup extends Component {
    state = {
        validFirstName: false,
        validLastName: false,
        validUsername: false,
        validPassword: false,
        confirmPassword: false,
    }

    componentDidUpdate() {
        this.validateFirstName();
        this.validateLastName();
        this.validatePassword();
        this.confirmPassword();
        this.validateUsername();
    }

    validateFirstName() {
        if (this.props.firstName.length > 1 && !this.state.validFirstName) {
            this.setState({
                validFirstName: true
            });
        }
        if (this.props.firstName.length < 1 && this.state.validFirstName) {
            this.setState({
                validFirstName: false
            });
        }
    }

    validateLastName() {
        if (this.props.lastName.length > 1 && !this.state.validLastName) {
            this.setState({
                validLastName: true
            });
        }
        if (this.props.lastName.length < 1 && this.state.validLastName) {
            this.setState({
                validLastName: false
            });
        }
    }

    validateUsername() {
        if (this.props.username.length > 1 && !this.state.validUsername) {
            this.setState({
                validUsername: true
            });
        }
        if (this.props.username.length < 1 && this.state.validUsername) {
            this.setState({
                validUsername: false
            });
        }
    }

    validatePassword() {
        let strongPassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
        let valid = strongPassword.test(this.props.password);
        if (!this.state.validPassword && valid) {
            this.setState({
                validPassword: true
            });
        }
        if (this.state.validPassword && !valid) {
            this.setState({
                validPassword: false,
            });
        }
    }

    confirmPassword() {
        if (this.props.password === this.props.confirmPassword && !this.state.confirmPassword && this.props.password) {
            this.setState({
                confirmPassword: true
            });
        }
        if (this.props.password !== this.props.confirmPassword && this.state.confirmPassword) {
            this.setState({
                confirmPassword: false
            });
        }
    }


 

    

        render() {
            return (
                <div>
                    <h2 className="loginTitle title-font">Signup</h2>
                    <hr />
                    {this.props.message ? (
                        <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
                    ) : (<></>)}
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="first name" value={this.props.firstName} onChange={this.props.handleInputChange} valid={this.state.validFirstName} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="last name" value={this.props.lastName} onChange={this.props.handleInputChange} valid={this.state.validLastName} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} valid={this.state.validUsername} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password" value={this.props.confirmPassword} onChange={this.props.handleInputChange} valid={this.state.confirmPassword} />
                            <FormText>at least 8 characters, 1 capital & 1 number</FormText>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1"  onClick={() => this.props.handleRoleChange("student")}/>{' '}
                                Student
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" onClick={() => this.props.handleRoleChange("instructor")} />{' '}
                                Instructor
                            </Label>
                        </FormGroup>
                        
                        {this.props.admin && 
                        <input name="adminPassword" placeholder="instructor key" value={this.props.adminPassword} onChange={this.props.handleInputChange}></input>}

                        <br />
                        {/* if all fields are valid, allow the user to submit the form */}
                        {(this.state.validFirstName && this.state.validLastName && this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                            <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                        ) : (
                                <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                            )}
                        <p className="signupLink">
                            <Link to="/login">already have an account?  Sign in here</Link>
                        </p>
                    </Form>
                </div>
            );
        }
    }

    export default Signup;