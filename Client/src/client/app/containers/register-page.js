import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index'
import { Link } from 'react-router-dom'

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");

class Register extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e){
        e.preventDefault();
        let payload = {
            username: document.getElementById("username").innerHTML,
            password: document.getElementById("password").innerHTML,
            name: document.getElementById("truthname").innerHTML,
            email: document.getElementById("email").innerHTML
        };

        //let data = new FormData();
        //data.append("json", JSON.stringify(payload));
        console.log(payload);

        fetch("http://localhost:8080/user/save",
            {
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                method: "POST",
                body: payload
            })
            .then(function (res) { console.log(res.json()) })
            .then(function (data) { console.log(JSON.stringify(data)) })
    }

    render() {
        return <div className="container">
            <form className="form-horizontal" >
                <fieldset>
                    <div id="legend">
                        <legend className="">Register</legend>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="username">Username</label>
                        <div className="controls">
                            <input type="text" id="username" name="username" placeholder="" className="input-xlarge" />
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="truthname">Truth name</label>
                        <div className="controls">
                            <input type="text" id="truthname" name="truthname" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your truth name</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email" name="email" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password">Password</label>
                        <div className="controls">
                            <input type="password" id="password" name="password" placeholder="" className="input-xlarge" />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
                        <div clclassNameass="controls">
                            <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please confirm password</p>
                        </div>
                    </div>

                    <div claclassNamess="control-group">
                        <div className="controls">
                            <button onClick={this.handleClick} className="btn btn-success">Register</button>
                        </div>
                    </div>
                </fieldset>
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

export default connect(mapStateToProps)(Register);