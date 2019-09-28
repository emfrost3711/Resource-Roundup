import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./StudentResources.css";
import { Container, Divider, Header, Label, Grid, Segment , Dropdown, Feed} from 'semantic-ui-react';
import Tile from '../../components/ResourceTiles';
import techSelection from '../../utils/techTags.json';
import axios from "axios";
import ResourceCard from "../../components/ResourceCard/ResourceCard";



const resourceType = [
    {
      text: 'PDF',
      value: 'pdf',
    },
    {
      text: 'Article',
      value: 'article',
    },
    {
      text: 'Video',
      value: 'video',
    },
  
  ]



class StudentResources extends Component {
    state = {
        loggedIn: false,
        user: null,
        dataLoaded: false,
    fileTypeFilter: "article",
    techFilters: [],
    resources: []
    }

    componentDidMount() {

        API.isStudentLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).then(() => {
            this.fetchResourceData()
        }).then(() => {
            this.setState({dataLoaded: true})
        }) .catch(error => console.log('Error during setup:', error))

    }


    fetchResourceData = () => {
        return axios.get('/api/resources').then(res => {
          // console.log('Project data:',res.data);
          this.setState({ resources: res.data });
          return res.data
        }).catch(error => {
          console.log('Error while fetching data:', error);
          return error;
        });
      }

    //handleFileTypeFilter
  handlefileTypeFilter = (e, {value}) => {
    this.setState({fileTypeFilter:value})
  }

  handleTechFilter = (e, {value}) => {
    this.setState({techFilters:value})
  }

  compareArray = (searchArray, mainArray) =>{
    let fileType = true;
    searchArray.forEach(key=>{
      if(-1 === mainArray.indexOf(key)){
        fileType = false
      }
    }, this)
    return fileType;
  }

  // A helper method for rendering one Tile for each 1/3 project
  renderTiles = remainder => {
    let resourceFileType = this.state.fileTypeFilter;
    switch(this.state.fileTypeFilter){
      case "pdf": resourceFileType = "pdf"
        break;
      case "article": resourceFileType = "article"
        break;
      case "video": resourceFileType= "video"
        break;
      default: resourceFileType = "article";
    }
    let colArr = this.state.resources.filter(resource => {
        return ((resource.fileType === resourceFileType) &&(this.compareArray(this.state.techFilters, resource.tech_tags)))
      }).filter((resource, index) => {
        return index % 2 === remainder;
      });
      return colArr.map(resource => (
        <ResourceCard {...resource} renderTechTags={this.renderTechTags}
        />
      ));
    }

  renderTechTags = (tech_tags) => {
    return tech_tags.slice(0, 6).map(tech_tag => (
      <Label className='tileTags'>
        {tech_tag}
      </Label>
    ));
  }

  render(props) {
    // console.log("before render state", this.state)
    return (

      <div className='exploreBackground'>
        { this.state.dataLoaded ?
            <>
            <Segment basic className='exploreNavBuffer'></Segment>
            

               

                <Grid.Row>
                <Grid.Column width={2}/>
                <Grid.Column width={12}>
                  <Segment textAlign='center' vertical className='exploreBanner'>
                    <Container>
                      <Header className='exploreHeader'>
                        <span className='exploreProjectsSpan'>Discover Resources</span> {' '}
                        <Dropdown inline options={resourceType} defaultValue={resourceType[0].text} className='exploreDropdown' onChange={this.handlefileTypeFilter}/>
                      </Header>
                      <h1 className='searchHeader'>
                        <span className='searchBySpan'>Search by</span> {' '}
                        <Dropdown inline multiple search selection options={techSelection} placeholder='All Technologies' className='searchDropdown' onChange={this.handleTechFilter}/>
                      </h1>
                    </Container>
                  </Segment>
                  <br/><br/>
                  </Grid.Column>
                  <Grid.Column width={2}/>
                  </Grid.Row>
                  
                  
                  <Grid stackable columns={3}>
                    <Grid.Row>
                      <Grid.Column>
                        {this.renderTiles(0)}
                      </Grid.Column>
                      <Grid.Column>
                        {this.renderTiles(1)}
                      </Grid.Column>
                      <Grid.Column>
                        {this.renderTiles(2)}
                      </Grid.Column>
                      <Grid.Column>
                        {this.renderTiles(3)}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              
              </>
            
         
        : ''
        }
      </div>
    );
  }


}

export default StudentResources;