import React, {Component} from "react";
import API from "../../utils/API";
import { Skeleton, Card, Icon, Avatar, Tooltip, Modal, Button } from 'antd';
import CommentForm from "../CommentForm";

const { Meta } = Card;


class ResourceCard extends Component {

    state = {
        loading: true,
        likes: 0,
    dislikes: 0,
    action: null,
    visible: false,
    type: "video"
  
      };
    
    componentDidMount() {
        this.loading()


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
        likes: 1,
        dislikes: 0,
        action: 'liked',
      });
    };
  
    dislike = () => {
      this.setState({
        likes: 0,
        dislikes: 1,
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

      render() {
        const { loading, likes, dislikes, action } = this.state;

        
    
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
       
       {this.state.type === "pdf" ? (
       
       <Card
          style={{ width: 300, marginTop: 16 }}
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
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>)

        : this.state.type === "video" ? (<Card
          style={{ width: 300 }} 
          cover={
            <iframe src="https:///codingbootcamp.hosted.panopto.com/
Panopto/Pages/Embed.aspx?id=8dae9a0b-1cbc-48d8-88f0-aa2d00085a60"
style={{width: 300 , height: "auto" , frameborder: 0}}></iframe>
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
            title="Card title"
            description="This is the description"
          />
          
        </Card>)

        :  (<Card
          style={{ width: 300 }} 
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
            title="Card title"
            description="This is the description"
          />
          
        </Card>)
      }
      
    
</>
        );
      }
    }



export default ResourceCard;