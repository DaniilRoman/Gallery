import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeQueryForSearch } from '../actions/index';
import { changeActivePage } from '../actions/index';
import Pagination from "react-js-pagination";

const PER_PAGE = 10;
const RANGE_DISPLAYED = 10;
const TOTAL_COUNT = 100;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
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
        this.props.Be.projects({
            q: this.props.queryForSearch,
            page: this.props.activePage
        }, (err, res, data) => {
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

    handlePageChange(pageNumber) {
        this.props.changeActivePage(pageNumber);
        this.getProjectsBySearch();
    }

    componentDidMount() {
        this.getProjectsBySearch();
    }


    render() {
        return (
            <div className="container">
                <h2>Projects:</h2>
                <form>
                    <input value={this.props.queryForSearch}
                        onChange={this.handleChange} type="text"
                        placeholder="search..." />
                    <button onClick={this.handleClick} type="submit">search</button>
                </form>
                <ol>
                    {this.showProjectsList()}
                </ol>
                <Pagination
                    hideDisabled
                    activePage={this.props.activePage}
                    itemsCountPerPage={PER_PAGE}
                    totalItemsCount={TOTAL_COUNT}
                    pageRangeDisplayed={RANGE_DISPLAYED}
                    onChange={this.handlePageChange}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        Be: state.BehanceAPI,
        queryForSearch: state.queryForSearch,
        activePage: state.activePage
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            select: select,
            changeProjects: changeProjects,
            changeQueryForSearch: changeQueryForSearch,
            changeActivePage: changeActivePage
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);
