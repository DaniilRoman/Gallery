import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import '../resources/login-register.css';
import { changeActiveNavLink } from '../actions/index';
import { changeLoginPage } from '../actions/index';
import { changeFlag } from "../actions/index";

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        this.props.changeActiveNavLink(["nav-link", "nav-link active", "nav-link"]);
    }


    handleClick(e) {
        e.preventDefault();

        let username = this.props.username,
            password = this.props.password;


        fetch("http://localhost:8080/user/" + username + "/" + password + "/truthname",
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: "GET",
            }).then((res) => { return res.json() })
            .then((user) => {
                switch (JSON.stringify(user.name)) {
                    case "null":
                        this.props.changeFlag(false);
                        break;
                    case "trable with password":
                        this.props.changeFlag(false);
                        break;
                    default:
                        this.props.changeFlag(true);
                        break;
                }
            })
    }

    handleChange(e) {

        console.log(e.currentTarget.className);
        switch (e.currentTarget.id) {
            case "username":
                this.props.changeLoginPage({ username: e.target.value });
                break;
            case "password":
                this.props.changeLoginPage({ password: e.target.value });
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
                                    <form id="login-form" style={{ display: 'block' }}>
                                        <div className="form-group">
                                            <input className="form-control" onChange={this.handleChange} id="username" tabIndex="1" type="text" placeholder="Enter Username" name="uname" required />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" onChange={this.handleChange} id="password" tabIndex="2" type="password" placeholder="Enter Password" name="psw" required />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <input type="submit" name="login-submit" onClick={this.handleClick} id="login-submit" tabIndex="3" className="form-control btn btn-login" value="Log In" />
                                            </div>
                                        </div>
                                        <span align="center" className="psw"><Link to={`/register`}>Dont register?</Link></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    };
}
function mapStateToProps(state) {
    return {
        username: state.loginPage.username,
        password: state.loginPage.password,
        flag: state.flag
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLoginPage: changeLoginPage,
        changeActiveNavLink: changeActiveNavLink,
        changeFlag: changeFlag

    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);