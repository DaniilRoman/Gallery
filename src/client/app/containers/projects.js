import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeQueryForSearch } from '../actions/index';

class Projects extends Component {
    constructor(props) {
        super(props);
        //this.getProjectsBySearch = this.getProjectsBySearch.bind(this);
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

    handleChange(e) {
        this.props.changeQueryForSearch(e.target.value);
    }

    componentDidMount() {
        this.getProjectsBySearch();
    }


    render() {
        return (
            <div>
                <h2>Projects:</h2>
                <form>
                    <input value = {this.props.queryForSearch}
                        onChange={this.handleChange} type="text"
                        placeholder="search..." />
                    <button onClick={this.getProjectsBySearch} type="submit">search</button>
                </form>
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

export default connect(mapStateToProps, matchDispatchToProps)(Projects);
