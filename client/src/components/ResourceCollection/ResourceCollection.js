import React, { Component } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";
import techSelection from '../../utils/techTags.json';

import { Container, Header,  Grid, Segment , Dropdown, Label} from 'semantic-ui-react';

const languageOptions = [
    {
      text: 'Javascript', value: 'javascript'
    },
    {
      text: 'HTML', value: 'html'
    },
    {
      text: 'CSS', value: 'css'
    },
    {
      text: 'Node.js', value: 'node'
    },
    {
      text: 'Express', value: 'express'
    },
    {
      text: 'Github', value: 'github'
    },
    {
      text: 'Handlebars', value: 'handlebars'
    },
    {
      text: 'AJAX/API', value: 'ajax/api',
    },
    {
      text: 'Other', value: 'other'
    },
    {
      text: 'Review Session', value: 'reviewSession'
    },
    {
      text: 'Heroku', value: 'heroku'
    },
    {
      text: 'React', value: 'react'
    },
    {
      text: 'mySQL', value: 'mysql'
    },
    {
      text: 'MongoDB', value: 'mongodb'
    }
  ]

  export class ResourceCollection extends Component {

    state = {
        techTypeFilter: "",
        techFilters: [],
        resources: []

    };

    
    componentDidMount = () => {
        console.log(this.props);
    };

    // handleCategoryClick = (technology) => {
    //     let resources = [...this.state.resources]
    //     let selectedResources = resources.filter(resource => resource.tech_tags.includes(technology))
    //     this.setState({
    //         selectedResources
    //     })
    // }

    

    renderTechTags = (tech_tags) => {
        return tech_tags.slice(0, 6).map(tech_tag => (
          <Label className='tileTags'>
            {tech_tag}
          </Label>
        ));
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

      renderTiles = remainder => {
        let resourceTechType = this.state.techTypeFilter;
        switch(this.state.techTypeFilter){
          case "Javascript": resourceTechType = "javascript"
            break;
          case "HTML": resourceTechType = "html"
            break;
          case "CSS": resourceTechType= "css"
            break;
            case "Node,js": resourceTechType = "node"
            break;
          case "Express": resourceTechType = "express"
            break;
          case "Github": resourceTechType= "github"
            break;
            case "Handlebars": resourceTechType = "handlebars"
            break;
          case "AJAX/API": resourceTechType = "ajaxApi"
            break;
          case "Review Session": resourceTechType= "reviewSession"
            break;
            case "Heroku": resourceTechType = "heroku"
            break;
          case "React": resourceTechType = "react"
            break;
            case "mySQL": resourceTechType = "mysql"
            break;
          case "MongoDB": resourceTechType = "mongodb"
            break;
          
          default: resourceTechType = "Javascript";
        }
        let colArr = this.state.resources.filter(resource => {
            return ((resource.language === resourceTechType) &&(this.compareArray(this.state.techFilters, resource.tech_tags)))
          }).filter((resource, index) => {
            return index % 2 === remainder;
          });
          return colArr.map(resource => (
            <ResourceCard
                                resourceId={resource._id}
                                title={resource.title}
                                fileType={resource.fileType}
                                image={resource.image}
                                likes={resource.likes}
                                dislikes={resource.dislikes}
                                description={resource.description}
                                language={resource.language}
                                tech_tags={resource.tech_tags}
                                source_s3={resource.source_s3}
                                other_url={resource.other_url}
                                video_url={resource.video_url}
                                status={resource.status}
                                comments={resource.comments}
                                user={this.props.user}

                                renderTechTags={this.renderTechTags}
                            />
          ));
        }

    render() {


        return (
            
               <>
            <Segment basic className='exploreNavBuffer'></Segment>
                <Grid.Row>
                <Grid.Column width={2}/>
                <Grid.Column width={12}>
                  <Segment textAlign='center' vertical className='exploreBanner'>
                    <Container>
                      <Header className='exploreHeader'>
                        <span className='exploreProjectsSpan'>Discover Resources</span> {' '}
                        <Dropdown inline options={languageOptions} defaultValue={languageOptions[0].text} className='exploreDropdown' onChange={this.handlefileTypeFilter}/>
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
                      </Grid.Row>
                      <Grid.Row>
                      <Grid.Column>
                        {this.renderTiles(2)}
                      </Grid.Column>
                      <Grid.Column>
                        {this.renderTiles(3)}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
             </>


        )

    };

}


export default ResourceCollection;