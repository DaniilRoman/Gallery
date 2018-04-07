import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeImagesIndex } from '../actions/index';
import { changeCountImages } from '../actions/index';
import { changeImageArray } from '../actions/index';

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
            default:
                break;

        }
    }

    showModules() {
        return this.props.modules.map((_module, index) => {
            return this.handleSwitch(_module, index);
        })
    };

    createImagesArray() {
        let tmp = [];
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
        if (this.props.imageArray != [])
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
                <div align="center" id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="" ></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="" ></li>
                    </ol> */}
                    <div className="carousel-inner" role="listbox">
                        {this.getImages()}
                    </div>
                </div>
                <br/>
                {this.showModules()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeIndex: state.index,
        count: state.count,
        imageArray: state.imageArray
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            changeImagesIndex: changeImagesIndex,
            changeCountImages: changeCountImages,
            changeImageArray: changeImageArray
        }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Modules);