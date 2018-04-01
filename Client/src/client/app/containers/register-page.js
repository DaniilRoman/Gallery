import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeRegisterPage } from '../actions/index';
import { changeActiveNavLink } from '../actions/index';
import '../resources/login-register.css';

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.changeActiveNavLink(["nav-link", "nav-link", "nav-link active"]);
    }


    handleClick(e) {
        e.preventDefault();

        let payload = {
            username: this.props.username,
            password: this.props.password,
            name: this.props.name,
            email: this.props.email
        };


        fetch("http://localhost:8080/user/save",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            .then(function (res) { console.log(res.json()) })
            .then(function (data) { console.log(JSON.stringify(data)) })
    }

    handleChange(e) {

        console.log(e.currentTarget.className);
        switch (e.currentTarget.id) {
            case "username":
                this.props.changeRegisterPage({ username: e.target.value });
                console.log("username");
                break;
            case "truthname":
                this.props.changeRegisterPage({ name: e.target.value });
                console.log("truthname");
                break;
            case "email":
                this.props.changeRegisterPage({ email: e.target.value });
                console.log("email");
                break;
            case "password":
                this.props.changeRegisterPage({ password: e.target.value });
                console.log("password");
                break;
            case "password_confirm":
                this.props.changeRegisterPage({ password_confirm: e.target.value });
                console.log("password_confirm");
                break;
            default:
                break;

        }

    }


    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="register-form" >
                                        <div className="form-group">
                                            <input type="text" id="username" tabIndex="1" onChange={this.handleChange} name="username" placeholder="Username" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" id="truthname" tabIndex="2" onChange={this.handleChange} placeholder="Full name" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="email" id="email" tabIndex="3" onChange={this.handleChange} name="email" placeholder="Email Address" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="password" tabIndex="4" onChange={this.handleChange} name="password" placeholder="Password" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="password_confirm" tabIndex="5" onChange={this.handleChange} name="password_confirm" placeholder="Password confirm" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <input type="submit" name="register-submit" tabIndex="6" id="register-submit" className="form-control btn btn-register" value="Register Now" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };

}
function mapStateToProps(state) {
    return {
        username: state.registerPage.username,
        password: state.registerPage.password,
        name: state.registerPage.name,
        email: state.registerPage.email

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeRegisterPage: changeRegisterPage,
            changeActiveNavLink: changeActiveNavLink
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Register);