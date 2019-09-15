import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Login extends Component {
    render () {
    return (
        <div className="loginBox">
            <h2 className="loginTitle title-font">Login</h2>
            <hr/>
            {this.props.message ? (
                <Alert className="animated fadeIn" color="danger">{this.props.message}</Alert>
            ) : (<></>)}
            <Form>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" placeholder="username" value={this.props.username} onChange={this.props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} />
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
                <Button id="loginBtn" onClick={this.props.handleLogin} block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                </p>
            </Form>
        </div>
    );
}
}

export default Login;