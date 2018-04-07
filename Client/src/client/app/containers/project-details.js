import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';
import { withRouter, Link } from 'react-router-dom';
import '../resources/project-details.css';
import { select } from '../actions';
import { bindActionCreators } from 'redux';
import { changeActiveNavLink } from '../actions/index';
import { changeImagesIndex } from '../actions/index';
import { changeFlag } from '../actions';
import { rename } from 'fs';
import Modules from '../containers/project-modules';


class Details extends Component {
    constructor(props) {
        super(props);
    }


    getProgectInfo() {
        // let id = this.props.project.id;
        let id = this.props.match.params.id;
        console.log("id:::::::" + id);
        this.props.select(null);
        this.props.Be.project(id, (err, res, data) => {
            console.dir(data); this.props.select(data.project); this.props.changeFlag(false);
        });
    }

    getRender() {
        let render = "";
        if (!this.props.flag) {
            this.props.changeFlag(true);
            return this.props.project.modules[0].embed;
        }
        return render;
    }

    componentWillMount() {
        console.log("WillMount");
        this.props.changeActiveNavLink(["nav-link", "nav-link", "nav-link"]);
        this.getProgectInfo();
    }
    componentWillUnmount() {
        this.props.changeFlag(true);
        this.props.changeImagesIndex(0);
    }
    render() {
        if (this.props.flag) {
            return (
                <div>
                    <h3 align='center' >Project dont load yet:</h3>
                    <Link to='/'>Back</Link>
                </div>);
        }
        else return (<div>
            <h3 align="center">{this.props.project.name}</h3>
            <Modules modules={this.props.project.modules} />
        </div>);
    }




}

function mapStateToProps(state) {
    return {
        project: state.active,
        Be: state.BehanceAPI,
        flag: state.flag
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            select: select,
            changeFlag: changeFlag,
            changeActiveNavLink: changeActiveNavLink,
            changeImagesIndex: changeImagesIndex
        }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Details));
