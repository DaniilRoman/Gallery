import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import '../resources/login-register.css';
import { changeActiveNavLink } from '../actions/index';

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.changeActiveNavLink(["nav-link", "nav-link active", "nav-link"]);
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-login">
                        <div className="panel-body">
                            <div className="row">
                                <div class="col-lg-12">
                                    <form id="login-form" style={{ display: 'block' }}>
                                        <div className="form-group">
                                            <input className="form-control" tabindex="1" type="text" placeholder="Enter Username" name="uname" required />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" tabindex="2" type="password" placeholder="Enter Password" name="psw" required />
                                        </div>
                                        <div className="form-group text-center">
                                            <input className="" type="checkbox" tabindex="4" name="remember" />
                                            <label htmlFor="remember">Remember me</label>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="login-submit" id="login-submit" tabindex="3" className="form-control btn btn-login" value="Log In" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="psw"><Link to={`/register`}>Dont register?</Link></span>
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
        // projects: state.projects,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeActiveNavLink: changeActiveNavLink
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);