import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index'
import { Link } from 'react-router-dom'

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="container">
            <form className="form-horizontal">
                <div className="imgcontainer">
                    <img width="30px" src={IMG_DIR} alt="Avatar" className="avatar" />
                </div>
                <div className="control-group">
                    <label className="control-label" htmlFor="uname"><b>Username</b></label>
                    <input className="input-xlarge" type="text" placeholder="Enter Username" name="uname" required />

                    <label className="control-label" htmlFor="psw"><b>Password</b></label>
                    <input className="input-xlarge" type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label className="control-label">
                        <input className="input-xlarge" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw"><Link to={`/register`}>Dont register?</Link></span>
                </div>
            </form>
        </div>
    };
}
function mapStateToProps(state) {
    return {
        // projects: state.projects,
        // Be: state.BehanceAPI
    };
}

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators()
//         // { select: select, changeProjects: changeProjects }, dispatch)
// }

export default connect(mapStateToProps)(LoginPage);