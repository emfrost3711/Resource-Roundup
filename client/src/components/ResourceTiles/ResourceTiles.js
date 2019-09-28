import React, {Component} from 'react';
import API from "../../utils/API";
import { Card, Icon, Image, Button, Divider, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ResourceTiles.css';





class Tile extends Component {

    state = {
        loading: true,
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        action: null,
        visible: false,
        favorited: false,
      };

      componentDidUpdate() {
        this.updateLikesDislikes()
      }

      like = () => {
        this.setState({
          likes: this.state.likes + 1,
          dislikes: this.state.dislikes,
          action: 'liked',
        }).then(() => {
            API.updateLikesDislikes()
        });
        // let updatedLikes = this.props.likes + 1,
        // this.props.likes = updatedLikes; 
      };
    
      dislike = () => {
        this.setState({
          likes: this.state.likes,
          dislikes: this.state.dislikes + 1,
          action: 'disliked',
        });
      };
  
     callback = (key) => {
        console.log(key);
      }
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
  
      updateLikesDislikes = e => {
        const resourceId = this.props.resourceId;
        // console.log(resourceId);
        if (this.state.action === "liked") {
          API.likedislike(resourceId, {likes: 1 });
       
        }
        else if (this.state.action === "disliked") {
          API.likedislike(resourceId, {dislikes: 1 });
      }
    };
  
      addToFavorites = e => {
        console.log(this.props.user);
        console.log(this.props.resourceId);
        let favoriteData = {user_id: this.props.user._id, resource: this.props.resource._id}
        API.addFavorite(favoriteData)
        this.setState({favorited: true})
      }
  
  
    render (props) {
        const { loading, likes, dislikes, action, favorited } = this.state;
        return (
        <div><Card centered raised className='tileCard'>
        <Card.Content className='tileHeader'>
            <a href={this.props.other_url || this.props.s3_url || this.props.video_url} target="_blank"><Image src={this.props.img ||this.props.video_url} size='medium'  fluid/></a>
            <Card.Header className='tileTitle'>
              {this.props.title}
              {this.props.fileType}
            </Card.Header>
          </Card.Content>
        <Card.Content className='tileContent'>
          <Divider/>
          <Card.Description className='tileState'>{this.props.description}</Card.Description>
          <Divider/>
          <Card.Description className='tileSummary'>
          {this.props.renderTechTags(this.props.tech_tags)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button.Group>
              <Button 
              content="like"
              icon="thumbs up outline"
              label={{
                  content:likes
              }}
              labelPosition="left"
              action="liked" 
              onclick={this.like}/>
              <Button 
              content="dislike"
              icon="thumbs down outline"
              label={{
                  content:this.state.dislikes
              }}
              labelPosition="left" 
              onclick={{
                  event: this.dislike,
                  data: this.props.dislikes 
              }}/>
             
              <Modal trigger={<Button icon="comment outline" />}>
              <Modal.Header>Comments</Modal.Header>
              <Modal.Content >
                   Hello
              </Modal.Content></Modal>
              </Button.Group>
        
        </Card.Content>
        <Button animated='vertical' fluid attached='bottom' className='tileJoin' as={ Link } to={this.props.other_url || this.props.source_s3 || this.props.video_url} target="_blank">
          <Button.Content visible >
            Go to Resource
          </Button.Content>
          <Button.Content hidden>
            {`See More`}
          </Button.Content>
        </Button>
      </Card></div>


        
        
        
    
 
        )}}
    
    
      
      
    
  


export default Tile
