import React, { Component } from "react";
import ResourceCard from "../ResourceCard/ResourceCard";
import techSelection from '../../utils/techTags.json';
import { Label } from 'semantic-ui-react';


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

    renderTechTags = (tech_tags) => {
        return tech_tags.slice(0, 6).map(tech_tag => (
          <Label className='tileTags'>
            {tech_tag}
          </Label>
        ));
      }

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