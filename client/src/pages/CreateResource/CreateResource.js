import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Container, Segment, Header, Button} from 'semantic-ui-react';
import './CreateResource.css';
import techSelection from '../../utils/techTags.json';
import API from '../../utils/API';
import axios from "axios";


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
    text: 'CSS', value: 'css'
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

const fileTypeOptions = [
  {
    text: 'PDF',
    value: 'pdf'
  },
  {
    text: 'Article',
    value: 'article'
  },
  {
    text: 'Video',
    value: 'video'
  }
]

const statusOptions = [
  {
    text: 'Recommended',
    value: 'recommended'
  },
  {
    text: 'Required',
    value: 'required'
  },
  {
    text: 'Active',
    value: 'active'
  },
  {
    text: 'Disabled',
    value: 'disabled'
  }
]



class CreateResourceForm extends Component {
  state = {
    // mode: "create",
    loggedIn: false,
    user: null,
    resource:  {
      fileType: '',
      title: '',
      description: '',
      language: '',
      tech_tags: [],
      likes: 0,
      dislikes: 0,
      img: '',
      source_s3: '',
      other_url: '',
      video_url: '',
      status: [],
      // comments: []
    },
    redirect: false,
    redirect_location: ''
  };

  // Also, get info on the user and save to this.state.userID
    componentDidMount() {

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user,
                  
                     
                    
                });
            }
        }).then(() => {
          // if (this.determineMode(...this.getParams())){
          this.fetchResourceData()
          // this.fetchProjectData(...this.getParams())
        // .then(() => {
        //   if (this.state.owner_id !== this.state.user._id) {
        //     const [ resource ] = this.getParams();
        //     this.setState({redirect_location: `/edit/${this.state.resource._id}` })
        //     this.setState({redirect: true })
        // }})
        
        })}
    
  

  handleMainTechnologyChange = (e, {value}) => {
    this.setState({
      resource : {
        ...this.state.resource,
        language: value
      }
    });
  }

  handleOtherTechnologiesChange = (e, {value}) => {
    this.setState({
      resource: { 
        ...this.state.resource,
        tech_tags: value 
      }
    });
  }

  handleTitleChange = (e, {value}) => {
    this.setState({
      resource: {
        ...this.state.resource,
        title: value 
      }
    });
  }

  handleFileTypeChange = (e, {value}) => {
    this.setState({ 
      resource: {
        ...this.state.resource,
        fileType: value
      }
    });
  }
  

  handleStatusChange = (e, {value}) => {
    this.setState({ 
      resource: {
        ...this.state.resource,
        status: value
      }
    });
  }

  handleInputChange = event => {
    this.setState({ 
      resource: {
        ...this.state.resource,
        [event.target.name]: event.target.value
      }
    });
  }
  // getParams = () => [this.props.match.params.username, this.props.match.params.resource];

  // determineMode = (username, resource) => {
  //   if (username && resource) {
  //     // console.log('edit mode!')
  //     this.setState({mode: 'edit'})
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  fetchResourceData = (resource) => {
     axios.get(`/api/resources/${this.props.resource}`).then(res => {
      // console.log('Resource data:',res.data);
      const r = res.data[0];
      this.setState({ 
        resource:{
          _id: r._id,
          fileType: r.fileType,
          title: r.title,
          description: r.description,
          language: r.language,
          tech_tags: r.tech_tags,
          likes: r.likes,
          dislikes: r.dislikes,
          img: r.img,
          source_s3: r.source_s3,
          other_url: r.other_url,
          video_url: r.video_url,
          status: r.status,
          comments: r.comments
        }
      });
      this.setState({owner_id: r.owner_id})
      return res.data[0].owner_id;
    }).catch(error => {
      console.log('Error while fetching data:', error);
      return error;
    });
  }

  handleSubmitButton = event => {
    event.preventDefault();
    let dbResource = this.state.resource
    return axios.post("/api/resources/", dbResource)
        .then(dbResource => {
          console.log(dbResource);
          // console.log(res.data);
          this.setState({redirect_location: `/resources`})
          this.setState({redirect: true })
    })}
        

  render() {

    
    
    if (this.state.redirect) {return (<Redirect to={this.state.redirect_location} />)
   } else { 
     return (
      <div className='createBackground'>
    
      <Segment basic textAlign='center' vertical className='createBanner'>
        <Container>
          <Header className='createHeader'>
          {/* {this.state.mode === 'create' ?  */}
                Create a Resource
                {/* // :`Edit ${this.state.resource.title}`} */}
          </Header>
        </Container>
      </Segment>
      
   
        <Segment>
        <Container className='createContainer' text>
        <Form size='large' className='form' onSubmit={this.handleSubmitButton}>
          <Form.Select name='fileType' search label='Resource Type' options={fileTypeOptions}
            onChange={this.handleFileTypeChange} required value={this.state.resource.fileType}/>
          <Form.Input name='title' label='Resource Title' 
            onChange={this.handleInputChange} required value={this.state.resource.title}/>
            <Form.Select name='status' multiple label='Status' options={statusOptions} 
            onChange={this.handleStatusChange} value={this.state.resource.status}/>
          <Form.Input name='img' label='Resource Image'placeholder='Resource Image Link/URL' 
            onChange={this.handleInputChange} type='url' value={this.state.resource.img}/>
          <Form.TextArea name='description' label='Resource Description' placeholder='Keep it short and sweet' 
            onChange={this.handleInputChange} max='140' required value={this.state.resource.description}/>
          <Form.Select name='language' search label='Primary Language' options={languageOptions}
            onChange={this.handleMainTechnologyChange} required value={this.state.resource.language}/>
          <Form.Select name='tech_tags' multiple search label='Other Technologies' options={techSelection} 
            onChange={this.handleOtherTechnologiesChange} value={this.state.resource.tech_tags}/>
          <Form.Input name='source_s3' type="url" label='PDF S3 URL' 
            onChange={this.handleInputChange} value={this.state.resource.source_s3}/>
          <Form.Input name='other_url' type="url" label='Article URL' 
            onChange={this.handleInputChange} value={this.state.resource.other_url}/>
          <Form.Input name='video_url' type="url" label='Video URL' 
            onChange={this.handleInputChange} value={this.state.resource.video_url}/>
          <Button className='createButton'>
          {/* {this.state.mode === 'create' ?  */}
              Yeehaw!
              {/* // :'Save Changes'} */}
          </Button>
        </Form>
        <p className='warning'></p>
        </Container>
        </Segment>
      
    </div>
     )
   }
  }
}   




export default CreateResourceForm;