import React, { Component } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";

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
                        {this.props.resources.map((resource, index) =>
                            <ResourceCard
                                resourceId={resource._id}
                                key={index}
                                title={resource.title}
                                link={resource.link}
                                image={resource.image}
                                likes={resource.likes}
                                dislikes={resource.dislikes}
                                fileType={resource.fileType}
                                user={this.props.user}
                            />
                        )}
                    </>
                ) : null}
             </>


        )

    };

}


export default CommentCollection;