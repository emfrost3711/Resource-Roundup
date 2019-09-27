import React, { Component } from "react";
import API from "../../utils/API";
import { Skeleton, Card, Icon, Avatar, Tooltip, Modal, Button } from 'antd';
import CommentForm from "../CommentForm";

const { Meta } = Card;
const CommentsCard = (props) => {


  // callback = (key) => {
  //   console.log(key);
  // }
  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };


  // addToComments = e => {
  //   console.log(this.props.user);
  //   console.log(this.props.resourceId);
  //   let commentData = {resource: this.props.resourceId}
  //   API. addComment(commentData)
  // }

  return (

    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[


      ]}>
      <p>{props.comments}</p>
    </Card>

  )
}
export default CommentsCard;