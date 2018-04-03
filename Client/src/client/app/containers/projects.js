import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import { changeProjects } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeQueryForSearch } from '../actions/index';
import { changeActivePage } from '../actions/index';
import Pagination from "react-js-pagination";
import '../resources/projects.css';
import '../resources/search-input.css';


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
            return <div className="col-xs-12 col-sm-6 col-md-4" onClick={() => this.props.select(project)}
                key={project.id}>
                {this.checkAuth(project)}
            </div>;
        })
    };

    checkAuth(project) {
        if (this.props.flag) {
            return <Link to={`/projects/${project.id}`}>{this.projectInfo(project)}</Link>
        } else return <Link to={'/no_auth'}>{this.projectInfo(project)}</Link>
    }

    projectInfo(project) {
        return <div className="image-flip" >
            {/* onTouchStart={"this.classList.toggle('hover');"}> */}
            {/* <div className="mainflip"> */}
            {/* <div className="frontside"> */}
            <div className="card" style={{ height: '350px' }}>
                <div className="card-body text-center">
                    <p><img className=" img-fluid" src={project.covers.original} alt="card image" /></p>
                    <h5 className="card-title">{project.name}</h5>
                    {/* <p className="card-text">This is basic card with image on top, title, description and button.</p> */}
                    {/* <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-plus">dghfgfjh</i></a> */}
                </div>
            </div>
            {/* </div> */}
            {/* <div className="backside">
                    <div className="card">
                        <div className="card-body text-center mt-4">
                            <h4 className="card-title">Sunlimetech</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    }

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
                <br />
                <h1 align='center' >Projects:</h1>
                <br />
                {/* <form>
                    <input value={this.props.queryForSearch}
                        onChange={this.handleChange} type="text"
                        placeholder="search..." />
                    <button onClick={this.handleClick} type="submit">search</button>
                </form> */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-group">
                                {/* <form id="custom-search-form" > */}
                                <input value={this.props.queryForSearch} onChange={this.handleChange} type="text" id="search-query" className="form-control" placeholder="Search for..." />
                                <span className="input-group-btn">
                                    <button onClick={this.handleClick} className="btn btn-light" type="button">Go!</button>
                                </span>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div><br />





                <section id="team" className="pb-5">
                    <div className="container">
                        <div className="row">
                            {this.showProjectsList()}
                        </div>
                    </div>
                </section>
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
            changeActivePage: changeActivePage
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Projects);




























    //test() {
    //     fetch("http://www.behance.net/v2/projects?client_id=e1A607WbYauktG2el5XT2dbZriXROx4T&q=" + this.props.queryForSearch + "&page=" + this.props.activePage,
    //         {
    //             headers: {
    //                 // 'Content-Type': 'application/json',
    //                 // 'Authorization': 'Basic bnVsbDpudWxs',
    //                 // 'Host': 'www.behance.net',
    //                 // 'X-Target-URI': 'http://www.behance.net',
    //                 // 'Connection': 'Keep-Alive'
    //                 'Access-Control-Allow-Origin': '*://*/*',
    //                 'Access-Control-Allow-Credentials': 'true'
    //             },
    //             method: "GET"
    //         }).then((res) => { console.log(res) })//return res.json() })
    //     // .then((body) => { console.log(body.projects) })
    //     // .then((user) => {
    //     //     switch (JSON.stringify(user.name)) {
    //     //         case "null":
    //     //             this.props.changeFlag(false);
    //     //             break;
    //     //         case "trable with password":
    //     //             this.props.changeFlag(false);
    //     //             break;
    //     //         default:
    //     //             this.props.changeFlag(true);
    //     //             break;
    //     //     }
    //     // })
    // }