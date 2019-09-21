import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ResourceSider from "../../components/ResourceMenu";
import "./StudentResources.css";
import { Layout } from 'antd';
import ResourceCollection from "../../components/ResourceCollection"

const { Sider, Content } = Layout;



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

    handleCategoryClick = (category) => {
        let resources = [...this.state.resources]
        let selectedResources = resources.filter(resource => resource.categories.includes(category))
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
        <Layout>
        <Sider width={275} style={{ background: '#fff' }}>
            <ResourceSider
            handleCategoryClick={this.handleCategoryClick}
            />
        </Sider>
        <Content style={{ height: '100vh'}}>
            <ResourceCollection resources={this.state.selectedResources} />
        </Content>
        </Layout>
        
            </>
            
        )
    }


}

export default StudentResources;