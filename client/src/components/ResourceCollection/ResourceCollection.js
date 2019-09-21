import React, { Component } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";

export class ResourceCollection extends Component {

    state = {
        title: "",
        link: "",
        image: "",
        likes: 0,
        dislikes: 0,


    };


    componentDidMount = () => {
        console.log(this.props);
    };

    render() {


        return (
            <>
                {this.props.resources.length ? (
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


export default ResourceCollection;