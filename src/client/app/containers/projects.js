import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index'
import { Link } from 'react-router-dom'

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    showProjectsList() {
        return this.props.projects.map((project) => {
            return <li onClick={() => this.props.select(project)}
                key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>;
        })
    };

    componentDidMount() {
        this.props.Be.projects({ q: "red" }, (err, res, data) => {
            if (err) throw err;
            this.props.changeProjects(JSON.parse(res.body).projects);
            console.dir(JSON.parse(res.body).projects);
        });
    }


    render() {
        return (
            <div>
                <h2>Projects:</h2>
                <ol>
                    {this.showProjectsList()}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        Be: state.BehanceAPI
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { select: select, changeProjects: changeProjects }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);
