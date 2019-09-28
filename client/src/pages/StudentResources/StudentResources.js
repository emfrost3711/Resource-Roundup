import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ResourceSider from "../../components/ResourceMenu";
import "./StudentResources.css";
import { Layout } from 'antd';
import ResourceCollection from "../../components/ResourceCollection"



   

class StudentResources extends Component {
    state = {
        loggedIn: false,
        user: null,
        resources: [],
        selectedResources: []
    }

    componentDidMount() {

        API.isStudentLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        this.getAllResources();

    }

    handleCategoryClick = (technology) => {
        let resources = [...this.state.resources]
        let selectedResources = resources.filter(resource => resource.tech_tags.includes(technology))
        this.setState({
            selectedResources
        })
    }

    getAllResources = () => {
        API.getResources()
        .then(dbResource => {
            this.setState({resources: dbResource.data});
            console.log(this.state.resources);
        })
    }

    render() {
        return (
            <>
        
           
         
       
            <ResourceCollection resources={this.state.resources} user={this.state.user}/>
       
        
            </>
            
        )
    }


}

export default StudentResources;