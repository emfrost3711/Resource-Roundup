import React, {Component} from "react";
import "./StudentDash.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import TabsCard from "../../components/ScheduleCard";
import Favorites from "../../components/Favorites";
import Request from "../../components/RequestResource";

class StudentDash extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
    }

    componentDidMount() {

        this.loading();

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

        console.log(this.props)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.comment) {
            API.saveComment({
                resource: this.state.resource,
                user: this.state.userId,
                comment: this.state.comment
            })
                .then(res => this.loadComments())
                .catch(err => console.log(err));
        }
    };
    
    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

    render() {
        return (
            <div className="studentDashboardPage">
                {this.state.loggedIn ? (
                    <div className="studentDashboardBox">
                        <br />
                        <h1 id="userTitle">Howdy, {this.state.user.username} !</h1>
                        <br />
                        <Favorites 
                        userId={this.state.user._id}/>
                        <br />
                        <br />
                        <br />
                        <Request/>
                    </div>
                ) : (
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                    </div> 
                )}
            </div>
        )
    }
}


export default StudentDash;