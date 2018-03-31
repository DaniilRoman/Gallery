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
            default:
                break;

        }


    }


    render() {
        return <div className="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="panel panel-login">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="register-form" >
                                        <div className="form-group">
                                            <input type="text" id="username" tabindex="1" onChange={this.handleChange} name="username" placeholder="Username" class="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" id="truthname" tabindex="2" onChange={this.handleChange} placeholder="Full name" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="email" id="email" tabindex="3" onChange={this.handleChange} name="email" placeholder="Email Address" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="password" tabindex="4" onChange={this.handleChange} name="password" placeholder="Password" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" id="password_confirm" tabindex="5" name="password_confirm" placeholder="Password confirm" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <input type="submit" name="register-submit" tabindex="6" id="register-submit" class="form-control btn btn-register" value="Register Now" />
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