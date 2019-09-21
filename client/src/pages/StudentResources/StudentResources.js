import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ResourceSider from "../../components/ResourceMenu";
import "./StudentResources.css";
import ResourceCard from "../../components/ResourceCard";
import { Layout } from 'antd';
<<<<<<< HEAD

=======
import CommentModal from "../../components/Modal";
import ResourceCollection from "../../components/ResourceCollection"
>>>>>>> 197bad9b0d8cefa9e810b11e51853e1e7568bdc9

const { Sider, Content } = Layout;



class StudentResources extends Component {
    state = {
        loggedIn: false,
        user: null,
        resources: [],
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

    loadHtml = () => {

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
            />
        </Sider>
        <Content style={{ height: '100vh'}}><ResourceCollection resources={this.state.resources} /></Content>
        </Layout>
        
            </>
            
        )
    }


}

export default StudentResources;