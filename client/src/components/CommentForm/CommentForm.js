// import React, { Component } from 'react'
// // import { Button, Comment, Form, Image} from 'semantic-ui-react'
// import axios from 'axios';
// import io from 'socket.io-client';
// // import "./chat.css";



// class InputAction extends Component {

//     constructor(props){
//       super(props)
//       const socket = io();
//       this.state = {
//         commentInput: '',
//         socket
//       }
//     }

//     componentDidMount() {
//       this.state.socket.emit('join', this.props.resourceId);
//     }

//     componentWillUnmount() {
//       this.state.socket.emit('leave', this.props.resourceId)
//     }

//     handleSubmit = event => {
//       event.preventDefault();
//       if (this.state.commentInput.length) {
//         const newComment = {
//           body: this.state.commentInput,
//         }
//         // console.log('chat:',newChat)
//         axios.patch('/api/resources', {resourceId: this.props.resourceId, update: {$push: {comment:newComment}}})
//         .then(res => {
//           this.state.socket.emit('newMsg', newComment)
//         })
//         .catch(err => console.log('Err on chat push to db:', err))
//         this.setState({commentInput: ''});
//       }
//     }

//     handleChange = event => {
//       this.setState({ commentInput: event.target.value });
//     }

//     renderCommentMessage = comment => {
//       return (
//         <Comment key={comment._id}>
//           <Comment.Content>
//             <Comment.Text className='Comment'>{comment.body}</Comment.Text>
//           </Comment.Content>
//         </Comment>
//       )
//     }

//     render () {
//       return (
//         <Comment.Group size='small'>
//           {this.props.comments.map(e => this.renderCommentMessage(e))}
//           <Form reply onSubmit={this.handleSubmit}>
//             <Form reply>
//               <Form.TextArea maxLength="140" name="commentInput" value={this.state.commentInput} onChange={this.handleChange} style={{ minHeight: 50 }}/>
//               <Button fluid className='commentButton'>New Comment</Button>
//             </Form>
//           </Form>
//         </Comment.Group>
//       )
//     }
// }


// export default InputAction


import React, { Component } from "react";
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import API from "../../utils/API";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class CommentForm extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      comments: [],
      submitting: false,
      value: ''
    };
  }


  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    API.showComments()
      .then(res => { this.setState({ comments: res.data }) })
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });
    console.log(this.state.value)
    let resourceId = this.props.resource;
    console.log("resourceId", resourceId);
    const that = this;

    let addCommentObject = { comment: this.state.value, resource_id: resourceId }
    console.log("addCommentObject", addCommentObject);

    API.addComment(addCommentObject)
      .then(function (res) {
        API.showComments()
          .then(res => { 
            console.log("comments", res);
            that.setState({ 
              comments: res.data,
              submitting: false,
              value: ""
            })
          })
        })
      }
    // setTimeout(() => {
    //   this.setState({
    //     submitting: false,
    //     value: '',
    //     comments: [
    //       {
    //         author: 'Han Solo',
    //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         content: <p>{this.state.value}</p>,
    //         datetime: moment().fromNow(),
    //       },
    //       ...this.state.comments || null,
    //     ],
    //   });


    // }, 1000);

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}

export default CommentForm;