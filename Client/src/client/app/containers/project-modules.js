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
                return <div className="container" ><img src={_module.src} /></div>
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



    getImages(){
        return this.props.modules.map((_module) => {
            return <div key={_module.id} className="carousel-item active">
                <img className="d-block img-fluid" src={_module.src}/>
            </div>
        })
    }

    handleClick(e){
        e.preventDefault();
    }



    render() {
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="" ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="" ></li>
                </ol> */}
                <div className="carousel-inner" role="listbox">
                    {/* <div className="carousel-item active">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=five" alt="First slide" />
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=six" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src="http://placehold.it/770x300&text=seven" alt="Third slide" />
                    </div> */}
                    {this.getImages()}
                </div>
                    <a className="carousel-control-prev" onClick={this.handleClick} href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" onClick={this.handleClick} href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>




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
