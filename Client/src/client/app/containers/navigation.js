import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveNavLink } from '../actions/index';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        console.log(e.currentTarget.className);
        switch (e.currentTarget.className) {
            case "nav-item 1":
                this.props.changeActiveNavLink(["nav-link active", "nav-link", "nav-link",]);
                console.log("1");
                break;
            case "nav-item 2":
                this.props.changeActiveNavLink(["nav-link", "nav-link active", "nav-link",]);
                console.log("2");
                break;
            case "nav-item 3":
                this.props.changeActiveNavLink(["nav-link", "nav-link", "nav-link active",]);
                console.log("3");
                break;
            default:
                break;

        }
    }


    render() {
        return (
            <nav>
                {/* pills pull-xs-left */}
                <ul className="nav nav-tabs">
                    <li className="nav-item 1" onClick={this.handleClick}>
                        <Link className={this.props.projectsLink} to='/projects'>Projects</Link>
                    </li>
                    <li className="nav-item 2" onClick={this.handleClick}>
                        <Link className={this.props.loginActive} to='/login'>Login</Link>
                    </li>
                    <li className="nav-item 3" onClick={this.handleClick}>
                        <Link className={this.props.registerActive} to='/register'>Register</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        projectsLink: state.navLinks[0],
        loginActive: state.navLinks[1],
        registerActive: state.navLinks[2]
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeActiveNavLink: changeActiveNavLink
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigation);
