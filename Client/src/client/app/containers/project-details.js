import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';
import { Link } from 'react-router-dom';
import '../resources/project-details.css';
import { select } from '../actions';
import { bindActionCreators } from 'redux';
import { changeActiveNavLink } from '../actions/index';
import { changeFlag } from '../actions';
import { rename } from 'fs';
import Modules from '../containers/project-modules';


class Details extends Component {
    constructor(props) {
        super(props);
        // this.getProgectIngo = this.getProgectIngo.bind(this);
    }


    getProgectInfo() {
        let id = this.props.project.id;
        this.props.select(null);
        this.props.Be.project(id, (err, res, data) => {
            console.dir(data); this.props.select(data.project); this.props.changeFlag(false);
        });
        // fetch("https://www.behance.net/v2/projects/"+id+"?client_id=e1A607WbYauktG2el5XT2dbZriXROx4T",
        // {
        //     headers: {
        //         // 'Content-Type': 'application/json',
        //         // 'Access-Control-Allow-Origin': '*'
        //     },
        //     method: "GET",
        // }) .then((res) => { console.log(res); return res.body })
        // .then((body) => { console.log(body) })
        // // .then((user) => { 
        // //     switch (JSON.stringify(user.name)) {
        // //         case "null":
        // //             this.props.changeFlag(false);
        // //             break;
        // //         case "trable with password":
        // //             this.props.changeFlag(false);
        // //             break;
        // //         default:
        // //             this.props.changeFlag(true);
        // //             break;
        // //     }})
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
        // this.props.select(null);
        this.props.changeActiveNavLink(["nav-link", "nav-link", "nav-link"]);
        this.getProgectInfo();
    }
    componentWillUnmount() {
        this.props.changeFlag(true);
    }
    render() {
        //   if (!this.props.project) {
        if (this.props.flag) {
            return (
                <div>
                    {/* <h3>Details:</h3> */}
                    <h3 align='center' >Project dont load yet:</h3>
                    <Link to='/'>Back</Link>
                </div>);
        }
        else return (<Modules modules={this.props.project.modules}/>);
            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="" ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="" ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=five" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=six" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=seven" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}
    }



    // render() {
    //     return (<div id="demo" className="carousel slide" data-ride="carousel">

    //         <ul className="carousel-indicators">
    //             <li data-target="#demo" data-slide-to="0" className="active"></li>
    //             <li data-target="#demo" data-slide-to="1"></li>
    //             <li data-target="#demo" data-slide-to="2"></li>
    //         </ul>

    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //                 {/* <img src="http://placehold.it/770x300&text=five" alt="Chicago" /> */}
    //                 <img src="http://placehold.it/770x300&text=four" alt="Los Angeles" />
    //             </div>
    //             <div className="carousel-item">
    //                 <img src="http://placehold.it/770x300&text=five" alt="Chicago" />
    //             </div>
    //             <div className="carousel-item">
    //                 <img src="http://placehold.it/770x300&text=six" alt="New York" />
    //             </div>
    //         </div>

    //         <a className="carousel-control-prev" href="#demo" data-slide="prev">
    //             <span className="carousel-control-prev-icon"></span>
    //         </a>
    //         <a className="carousel-control-next" href="#demo" data-slide="next">
    //             <span className="carousel-control-next-icon"></span>
    //         </a>

    //     </div>)
    // }




    // render() {
    //     return (<div className="container">
    //         <div id="main_area">
    //             <div className="row">
    //                 <div className="col-xs-12" id="slider">
    //                     <div className="row">
    //                         <div className="col-sm-8" id="carousel-bounding-box">
    //                             <div className="carousel slide" id="myCarousel">
    //                                 <div className="carousel-inner">
    //                                     <div className="active item" data-slide-number="0">
    //                                         {/* <img src={project.covers[115]} /></div> */}
    //                                         <img src="http://placehold.it/770x300&text=four" /></div>

    //                                     <div className="item" data-slide-number="1">
    //                                         {/* <img src={project.covers[202]} /></div> */}
    //                                         <img src="http://placehold.it/770x300&text=four" /></div>

    //                                     <div className="item" data-slide-number="2">
    //                                         {/* <img src={project.covers[230]} /></div> */}
    //                                         <img src="http://placehold.it/770x300&text=four" /></div>

    //                                     <div className="item" data-slide-number="3">
    //                                         <img src="http://placehold.it/770x300&text=four" /></div>

    //                                     <div className="item" data-slide-number="4">
    //                                         <img src="http://placehold.it/770x300&text=five" /></div>

    //                                     <div className="item" data-slide-number="5">
    //                                         <img src="http://placehold.it/770x300&text=six" /></div>
    //                                 </div>
    //                                 <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    //                                     <span className="glyphicon glyphicon-chevron-left"></span>
    //                                 </a>
    //                                 <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    //                                     <span className="glyphicon glyphicon-chevron-right"></span>
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     )
    // }




    // render() {
    //     if (!this.props.project) {
    //         return (
    //             <div>
    //                 <h3>Details:</h3>
    //                 <p>Такого проекта не существует</p>
    //                 <Link to='/'>Back</Link>
    //             </div>);
    //     }
    //     return (
    //         <div className="container">
    //             <h3>Details:</h3>
    //             <h2>{this.props.project.name}</h2>
    //             <img width="300px" src={this.props.project.covers.original} /><br />
    //             <p>{this.props.project.fields[0]}</p>
    //             <Link to='/'>Back</Link>
    //         </div>
    //     );
    // }
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
            changeActiveNavLink: changeActiveNavLink
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Details);
