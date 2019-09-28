import React, { Component } from "react";
import CommentsCard from "../CommentsCard/CommentsCard";

export class CommentCollection extends Component {

    state = {
        resource: "",
        user: "",
        comment: "",
    };


    componentDidMount = () => {
        console.log(this.props);
    };

    render() {


        return (
            <>
                {this.props.comments.length ? (
                    <>
                        {this.props.commments.map((comment, index) =>
                            <CommentsCard
                                comment={comment._id}

                            />
                        )}
                    </>
                ) : null}
             </>


        )

    };

}


export default CommentCollection;