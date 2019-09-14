import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import "./Home.scss";

class Home extends Component {

  state = {
    loggedIn: false,
    
  };

  c

 

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="homeBox">
        <h1>Testing</h1>
      </div>
    );
  }
}

export default Home;