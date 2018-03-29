import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeRegisterPage } from '../actions/index';

const path = require('path');
var IMG_DIR = path.resolve(__dirname, "src/client/app/resources/login.png");

class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();




        console.log(e.currentTarget.className);
        switch (e.currentTarget.className) {
            case "nav-item 1":
                this.props.changeActiveNavLink(["nav-link active", "nav-link"]);
                console.log("1");
                break;
            case "nav-item 2":
                this.props.changeActiveNavLink(["nav-link", "nav-link active"]);
                console.log("2");
                break;
            default:
                break;

        }





        let payload = {
            // username: document.getElementById("username").innerHTML,
            // password: document.getElementById("password").innerHTML,
            // name: document.getElementById("truthname").innerHTML,
            // email: document.getElementById("email").innerHTML
            username: this.props.username,
            password: this.prosp.password,
            name: this.props.name,
            email: this.props.email
        };

        //let data = new FormData();
        //data.append("json", JSON.stringify(payload));
        console.log(payload);

        fetch("http://localhost:8080/user/save",
            {
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: "POST",
                body: payload
            })
            .then(function (res) { console.log(res.json()) })
            .then(function (data) { console.log(JSON.stringify(data)) })
    }

    handleChange(registerPage){
        this.props.changeRegisterPage(registerPage);//username: "", password: "", name: input, email: "" });
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
                            <input type="text" id="username" onChange = { this.handleChange({ username: evevalue, password: "", name: "", email: ""}) } name="username" placeholder="" className="input-xlarge" />
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="truthname">Truth name</label>
                        <div className="controls">
                            <input type="text" id="truthname" onChange={this.handleChange({ username: "", password: "", value, email: "" }) } placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your truth name</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input type="text" id="email" onChange = { this.handleChange({ username: "", password: "", name: "", email: value })} name="email" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password">Password</label>
                        <div className="controls">
                            <input type="password" id="password" onChange = { this.handleChange({ username:"", password: value, name:"",email:""}) } name="password" placeholder="" className="input-xlarge" />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
                        <div className="controls">
                            <input type="password" id="password_confirm" name="password_confirm" placeholder="" className="input-xlarge" />
                            <p className="help-block">Please confirm password</p>
                        </div>
                    </div>

                    <div className="control-group">
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
        username: state.registerPage.username,
        password: state.registerPage.password,
        name: state.registerPage.name,
        email: state.registerPage.email

    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
    { changeRegisterPage: changeRegisterPage } , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Register);