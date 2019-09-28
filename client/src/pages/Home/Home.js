import React, { Component } from "react";
import { Button, Container,Grid, Header, Form, Icon, Image, Segment, Item } from 'semantic-ui-react';
import API from "../../utils/API";
// import "./Home.scss";
import landingImg from "../../assets/images/356.jpg";
import "../../assets/styling/css/landing.css"
import { relative } from "path";

const backgroundImage = {
  width: "100%",
  height: "100vh",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${landingImg})`,
  marginTop: '-15%',
  paddingTop:  '300px'
  
 };


class Home extends Component {

  state = {
    loggedIn: false,
    
  };

  

 

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
      
<div className= "landingImg" style={backgroundImage}>
      <Segment>
            <Container >
              

             
              <Grid className='landingGrid'>
                <Grid.Column width={8}>
                  <Segment>
                  <Header className='landingHeader'>
                  Resource Roundup
                  </Header>
                  <Header className='landingSubheader'>
                    just wrangling all of the important stuff in one, easy to use place. 
                  </Header>
                  </Segment>
                  
                 
                
                </Grid.Column>
                
              </Grid>
              </Container>
              </Segment>
              </div>
            
         

    
    );
  }
}

export default Home;