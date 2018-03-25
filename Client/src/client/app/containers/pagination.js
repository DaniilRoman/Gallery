import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeQueryForSearch } from '../actions/index';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    showProjectsList() {
        return this.props.projects.map((project) => {
            return <li onClick={() => this.props.select(project)}
                key={project.id}>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>;
        })
    };

    getProjectsBySearch() {
        this.props.Be.projects({ q: this.props.queryForSearch }, (err, res, data) => {
            if (err) throw err;
            this.props.changeProjects(JSON.parse(res.body).projects);
            console.dir(JSON.parse(res.body).projects);
        });
    }

    handleClick(e) {
        e.preventDefault();
        this.getProjectsBySearch();
    }

    handleChange(e) {
        e.preventDefault();
        this.props.changeQueryForSearch(e.target.value);
    }

    componentDidMount() {
        this.getProjectsBySearch();
    }


    render() {
        return (
            <div>
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
        Be: state.BehanceAPI,
        queryForSearch: state.queryForSearch
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            select: select,
            changeProjects: changeProjects,
            changeQueryForSearch: changeQueryForSearch
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pagination);
