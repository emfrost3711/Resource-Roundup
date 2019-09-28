
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
    renderItem={comment => <Comment content={comment.comment} />}
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
    API.getResource(this.props.resource)
      .then(res => this.setState({ comments: res.data.comments }))
      .catch(err => console.log(err));
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
    const that = this;

    let addCommentObject = { comment: this.state.value, resource_id: resourceId }
    console.log("addCommentObject", addCommentObject);

    API.addComment(addCommentObject)
      .then(function (res) {
        that.getComments();
        that.setState({
            submitting: false,
            value: ""
        })

        // GWEN: YOU SHOULD BE ABLE TO REMOVE ALL THIS:

        // API.showComments()
        //   .then(res => { 
        //     console.log("comments", res);
        //     that.setState({ 
        //       comments: res.data,
        //       submitting: false,
        //       value: ""
        //     })
        //   })
        // })
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
                        
      })
  }

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