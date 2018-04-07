import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { changeQueryForSearch, changeActivePage, newProjects, select, changeProjects } from '../actions/index';
import Pagination from "react-js-pagination";
import '../resources/projects.css';
import '../resources/search-input.css';
import InfiniteScroll from 'react-infinite-scroll-component';



class Projects extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getProjectsBySearch = this.getProjectsBySearch.bind(this);
        this.showProjectsList = this.showProjectsList.bind(this);
        this.nextProjects = this.nextProjects.bind(this);
    }

    showProjectsList() {
        return this.props.projects.map((project) => {
            return <div className="col-xs-12 col-sm-6 col-md-4" onClick={() => this.props.select(project)}
                key={project.id}>
                {this.checkAuth(project)}
            </div>;
        })
    };

    checkAuth(project) {
        if (this.props.flag === true) {
            return <Link to={`/projects/${project.id}`}>{this.projectInfo(project)}</Link>
        } return <Link to={'/no_auth'}>{this.projectInfo(project)}</Link>
    }

    projectInfo(project) {
        return <div className="image-flip" >
            <div className="card" style={{ height: '330px' }}>
                <div className="card-body text-center">
                    <p><img className=" img-fluid" src={project.covers[404]} alt="card image" /></p>
                    <h6 className="card-title">{project.name}</h6>
                </div>
            </div>
        </div>
    }

    nextProjects(){
        let page = this.props.activePage;
        this.props.changeActivePage(page + 1);
        this.props.Be.projects({
            q: this.props.queryForSearch,
            page: this.props.activePage
        }, (err, res, data) => {
            if (err) throw err;
            this.props.changeProjects(JSON.parse(res.body).projects);
            console.dir(JSON.parse(res.body).projects);
        });
    }
    getProjectsBySearch() {
        let page = 1;
        this.props.changeActivePage(page);
        this.props.Be.projects({
            q: this.props.queryForSearch,
            page: this.props.activePage
        }, (err, res, data) => {
            if (err) throw err;
            this.props.newProjects(JSON.parse(res.body).projects);
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
        this.nextProjects();
    }


    render() {
        return (
            <div className="container">
                <br />
                <h1 align='center' >Projects:</h1>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-group">
                                <input value={this.props.queryForSearch} onChange={this.handleChange} type="text" id="search-query" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button onClick={this.handleClick} className="btn btn-light" type="button">Go!</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div><br />

                <InfiniteScroll
                    pullDownToRefresh
                    dataLength={this.props.projects.length} //This is important field to render the next data
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                    refreshFunction={this.showProjectsList}
                    next={this.nextProjects}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    // children={this.showProjectsList()}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <section id="team" className="pb-5">
                        <div className="container">
                            <div className="row">
                                {this.showProjectsList()}
                            </div>
                        </div>
                    </section>
                </InfiniteScroll>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        Be: state.BehanceAPI,
        queryForSearch: state.queryForSearch,
        activePage: state.activePage,
        flag: state.flag
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            select: select,
            changeProjects: changeProjects,
            changeQueryForSearch: changeQueryForSearch,
            changeActivePage: changeActivePage,
            newProjects: newProjects
        }, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Projects));