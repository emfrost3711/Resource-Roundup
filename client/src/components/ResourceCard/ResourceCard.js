import React, {Component} from "react";
import API from "../../utils/API";
import { Skeleton, Card, Icon, Avatar, Tooltip, Collapse } from 'antd';

const { Meta } = Card;
const { Panel } = Collapse;

class ResourceCard extends Component {

    state = {
        loading: true,
        likes: 0,
    dislikes: 0,
    action: null,
      };
    
    componentDidMount() {
        this.loading()
    }
    

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

    loadComments = () => {
// add function to get all comments for this resource
    }

      render() {
        const { loading, likes, dislikes, action } = this.state;

        const actions = [
        
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
        </span>
          
          
        
        ];
    
        return (
          <>
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={actions}
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
            </Card>
            
  
            
            
    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={actions}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
    <Collapse onChange={this.callback}>
    <Panel header={ <span key="resource-comments">
          <Tooltip title="Comments">
          <Icon
            type="message"
            onClick={this.loadComments}
          />
          </Tooltip>
          </span>} key="1">
      <Collapse defaultActiveKey="1">
        <Panel  key="1">
          <p>text</p>
        </Panel>
      </Collapse>
    </Panel>
    </Collapse>
  </Card>
  </ >        
        );
      }
    }



export default ResourceCard;