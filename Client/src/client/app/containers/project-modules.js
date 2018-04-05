import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveNavLink } from '../actions/index';
import { changeImagesIndex } from '../actions/index';
import { Link } from 'react-router-dom';
import { changeCountImages } from '../actions/index';
import { changeImageArray } from '../actions/index';
// import { Carousel } from 'react-responsive-carousel';

class Modules extends Component {
    constructor(props) {
        super(props);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);

    }


    handleSwitch(_module, index) {
        switch (_module.type) {
            case "text":
                return <div key={index} align="center" className="container" dangerouslySetInnerHTML={{ __html: _module.text }}></div>;
                break;
            case "embed":
                return <div key={index} align="center" className="container" dangerouslySetInnerHTML={{ __html: _module.embed }}></div>;
                break;
            // case "image":
            //     return <div align="center" className="container" ><img src={_module.src} /></div>
            //     break;
            default:
                break;

        }
    }

    showModules() {
        return this.props.modules.map((_module, index) => {
            return this.handleSwitch(_module, index);
            // return <div className="col-xs-12 col-sm-6 col-md-4" onClick={() => this.props.select(project)}
            //         key={project.id}>
            //         {this.checkAuth(project)}
            //     </div>;
        })
    };

    createImagesArray(){
        let tmp=[];
        for (let _module of this.props.modules) {
            if (_module.type == "image") {
                tmp.push(_module);
            }
        }
        this.props.changeImageArray(tmp);
    }

    componentWillMount() {
      this.createImagesArray();
    }

    getImages() {
        // this.getClasses();
        if(this.props.imageArray!=[])
        return this.props.imageArray.map((_module, index) => {
            if (_module.type == "image") {
                this.props.changeCountImages(index);
                return <div style={{ height: _module.height, width: _module.width }} key={index} className={index == this.props.activeIndex ? "carousel-item active" : "carousel-item"} >
                    {/* //className={this.props.classes}>//"carousel-item active"> */}
                    <img style={{ height: _module.height, width: _module.width }} className="d-block img-fluid" src={_module.src} />
                    {/* <p className="legend">Legend</p> */}
                    {/* //className="d-block img-fluid" */}
                    <a className="carousel-control-prev" onClick={this.handlePrevClick} href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" onClick={this.handleNextClick} href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            }
        })
    }

    handlePrevClick(e) {
        e.preventDefault();
        if (this.props.activeIndex == 0) {
            this.props.changeImagesIndex(this.props.count);
        } else {
            this.props.changeImagesIndex(this.props.activeIndex - 1);
        }
    }

    handleNextClick(e) {
        e.preventDefault();
        if (this.props.activeIndex == this.props.count) {
            this.props.changeImagesIndex(0);
        } else {
            this.props.changeImagesIndex(this.props.activeIndex + 1);
        }
    }



    render() {
        return (
            <div className="container">
                {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>{this.getImages()}</Carousel> */}

                <div align="center" id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
                    {/* <a className="carousel-control-prev" onClick={this.handlePrevClick} href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" onClick={this.handleNextClick} href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>




                {this.showModules()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        // projectsLink: state.navLinks[0],
        // loginActive: state.navLinks[1],
        // registerActive: state.navLinks[2],
        activeIndex: state.index,
        count: state.count,
        imageArray: state.imageArray
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            // changeActiveNavLink: changeActiveNavLink,
            changeImagesIndex: changeImagesIndex,
            changeCountImages: changeCountImages,
            changeImageArray: changeImageArray
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Modules);