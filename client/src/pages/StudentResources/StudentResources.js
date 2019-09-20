import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ResourceSider from "../../components/ResourceMenu";
import "./StudentResources.css";
import ResourceCard from "../../components/ResourceCard";
import { Layout } from 'antd';


const { Sider, Content } = Layout;



class StudentResources extends Component {
    state = {
        loggedIn: false,
        user: null,
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
    }

    loadHtml() {

    }

    render() {
        return (
            <>
        <Layout>
        <Sider width={275} style={{ background: '#fff' }}>
            <ResourceSider
            />
        </Sider>
        <Content style={{ height: '100vh'}}><ResourceCard></ResourceCard></Content>
        </Layout>
        
            </>
            
        )
    }


}

export default StudentResources;