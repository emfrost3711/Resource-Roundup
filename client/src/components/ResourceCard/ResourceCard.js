import React, {Component} from "react";
import API from "../../utils/API";
import { Skeleton, Card, Icon, Avatar, Tooltip, Modal, Button } from 'antd';
import CommentForm from "../CommentForm";


const { Meta } = Card;
class ResourceCard extends Component {
    state = {
        loading: true,
        likes: this.props.likes,
        dislikes: this.props.dislikes,
        action: null,
        visible: false,
        favorited: false,
      };
    
    componentDidMount() {
        this.loading()


    }

    componentDidUpdate() {
      this.updateLikesDislikes()
    }
    
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }
    like = () => {
      this.setState({
        likes: this.state.likes + 1,
        dislikes: this.state.dislikes,
        action: 'liked',
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
      let favoriteData = {user_id: this.props.user._id, resource: this.props.resourceId}
      API.addFavorite(favoriteData)
      this.setState({favorited: true})
    }

    
      render() {
        const { loading, likes, dislikes, action, favorited } = this.state;
        
    
        return (
          <>
          
          <div>
        
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <CommentForm/>
        </Modal>
      </div>
       
       {this.props.fileType === "pdf" ? (
       
       <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
          
              <span key="comment-basic-like">
                     <Tooltip title="Like">
                      <Icon
                        type="like"
                        theme={action === 'liked' ? 'filled' : 'outlined'}
                        data-type="like"
                        onClick={this.like}
                      />
                    </Tooltip>
                    {" "}
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
                    {" "}
                    <Tooltip title="Dislike">
                      <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        data-type="dislike"
                        onClick={this.dislike}
                      />
                    </Tooltip>
                    {" "}
                    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
                </span>,
              <Icon type="message" key="message" onClick={this.showModal}/>,
              <Icon type="heart" key="heart" theme={favorited ? 'filled' : 'outlined'} onClick={this.addToFavorites} />,
            ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={this.props.title}
              description="This is the description"
            />
          </Skeleton>
        </Card>)
        : this.props.fileType === "video" ? (<Card
          style={{ width: 300 }} 
          cover={
            <iframe src={this.props.image}
style={{width: 300 , height: "auto" , frameborder: 0}}></iframe>
          }
          actions={[
            <span key="comment-basic-like">
                   <Tooltip title="Like">
                    <Icon
                      type="like"
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.updateLikesDislikes()}
                    />
                  </Tooltip>
                  {" "}
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
                  {" "}
                  <Tooltip title="Dislike">
                    <Icon
                      type="dislike"
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.updateLikesDislikes()}
                    />
                  </Tooltip>
                  {" "}
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
              </span>,
            <Icon type="message" key="message" onClick={this.showModal}/>,
            <Icon type="heart" key="heart" onClick={this.addToFavorites} />,
          ]}
          
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={this.props.title}
            description="This is the description"
          />
          
        </Card>
        )
        :  
        (<Card
          style={{ width: 300 }} 
          cover={
            <img
              alt="example"
              src={this.props.image}
              
            />
          }
          actions={[
            <span key="comment-basic-like">
                   <Tooltip title="Like">
                    <Icon
                      type="like"
                      theme={action === 'liked' ? 'filled' : 'outlined'}
                      onClick={this.like}
                    />
                  </Tooltip>
                  {" "}
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
                  {" "}
                  <Tooltip title="Dislike">
                    <Icon
                      type="dislike"
                      theme={action === 'disliked' ? 'filled' : 'outlined'}
                      onClick={this.dislike}
                    />
                  </Tooltip>
                  {" "}
                  <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
              </span>,
            <Icon type="message" key="message" onClick={this.showModal}/>,
            <Icon type="heart" key="heart" onClick={this.addToFavorites} />,
          ]}
          
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={this.props.title}
            description="This is the description"
          />
          
        </Card>)
      }
      
    
</>
        );
      }
    }
export default ResourceCard;