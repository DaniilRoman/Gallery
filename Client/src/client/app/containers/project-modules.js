import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveNavLink } from '../actions/index';
import { Link } from 'react-router-dom';

class Modules extends Component {
    constructor(props) {
        super(props);
        this.handleSwitch = this.handleSwitch.bind(this);
    }


    handleSwitch(_module) {
        switch (_module.type) {
            case "text":
                return <div className="container" dangerouslySetInnerHTML={{ __html: _module.text }}></div>;
                break;
            case "embed":
                return <div className="container" dangerouslySetInnerHTML={{ __html: _module.embed }}></div>;
                break;
            case "image":
                return <div className="container" ><img src={_module.src} alt="альтерн" /></div>
                break;
            default:
                break;

        }
    }

    showModules() {
        return this.props.modules.map((_module) => {
            return this.handleSwitch(_module);
            // return <div className="col-xs-12 col-sm-6 col-md-4" onClick={() => this.props.select(project)}
            //         key={project.id}>
            //         {this.checkAuth(project)}
            //     </div>;
        })
    };


    render() {
        return (
            <div className="container">
                {this.showModules()}
            </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(Modules);
