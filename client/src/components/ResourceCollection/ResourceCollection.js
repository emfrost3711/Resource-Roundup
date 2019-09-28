import React, { Component } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";

export class ResourceCollection extends Component {

    state = {
    
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
                                fileType={resource.fileType}
                                image={resource.image}
                                likes={resource.likes}
                                dislikes={resource.dislikes}
                                description={resource.description}
                                language={resource.language}
                                tech_tags={resource.tech_tags}
                                source_s3={resource.source_s3}
                                other_url={resource.other_url}
                                video_url={resource.video_url}
                                status={resource.status}
                                comments={resource.comments}
                                user={this.props.user}
                                renderTechTags={this.renderTechTags}
                            />
                        )}
                    </>
                ) : null}
             </>


        )

    };

}


export default ResourceCollection;