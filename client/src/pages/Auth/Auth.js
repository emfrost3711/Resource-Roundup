import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import API from "../../utils/API";
import "./Auth.scss";

class Auth extends Component {

  state = {
    loggedIn: false,
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    user: null,
    message: "",
    admin: false,
    adminPassword: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.username && this.state.password ) {
      API.login({
        username: this.state.username,
        password: this.state.password,
        admin: this.state.admin
      }).then(user => {
        console.log(user);
        if (user.data.loggedIn && !this.state.admin) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/student/dashboard';
        }
        else if (user.data.loggedIn && this.state.admin) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/admin/dashboard';
        }
        else {
          this.setState({
            message: user.data.message
          })
        }
      });
    }
    
  }

  handleRoleChange = (role) => {
        
    if (role === "instructor") {
        this.setState({
            admin: true
        });

    };
    if (role === "student") {
        this.setState({
            admin: false
        })
    
    };
}

  handleSignup = event => {
    event.preventDefault();
    if (this.state.username && this.state.password && !this.state.admin) {
      API.signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        admin: this.state.admin
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/student/dashboard';
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          this.setState({
            message: user.data
          })
        }
      });
    }
    else if (this.state.admin && this.state.adminPassword === '$heriff') {
      API.signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        admin: this.state.admin
      }).then(user => {
        if (user.data.loggedIn) {
          this.setState({
            loggedIn: true,
            user: user.data.user
          });
          console.log("log in successful");
          window.location.href = '/admin/dashboard';
        } else {
          console.log("something went wrong :(")
          console.log(user.data);
          this.setState({
            message: user.data
          })
        }
      })
    }
    else {
      this.setState({
        message: "Fill out a valid form"
      })
    }
  }

  render() {
    return (
      <div className="authBox">
        {(this.props.action === "login") ? (
          <Login
            username={this.state.username}
            password={this.state.password}
            admin={this.state.admin}
            handleLogin={this.handleLogin}
            handleInputChange={this.handleInputChange}
            message={this.state.message}
            adminPassword={this.state.adminPassword}
            handleRoleChange={this.handleRoleChange}
          />
        ) : (
            <Signup
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              username={this.state.username}
              password={this.state.password}
              confirmPassword={this.state.confirmPassword}
              handleSignup={this.handleSignup}
              handleInputChange={this.handleInputChange}
              message={this.state.message}
              admin={this.state.admin}
              handleRoleChange={this.handleRoleChange}
              adminPassword={this.state.adminPassword}
            />
          )}
      </div>
    )
  }
}



export default Auth;