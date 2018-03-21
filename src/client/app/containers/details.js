import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';
import { Link } from 'react-router-dom';


class Details extends Component {
    constructor(props) {
        super(props);
        this.result = { name: "", img: "", url: "" }
        this.getData = this.getData.bind(this);
        // this.Be = new Behance('e1A607WbYauktG2el5XT2dbZriXROx4T');
    }

    getData(th) {
        // this.Be.projects({}, function (err, res, data) {
        //     if (err) throw err;
        //     res = JSON.parse(res.body).projects[3];
        //     th.result.name = res.name;
        //     th.result.img = res.covers.original;
        //     th.result.url = res.url;
        //     //let result = data[0]["colors"][0]["b"];
        //     //return result
        // })
    }

    render() {
        if (!this.props.car) {
            return (
                <div>
                    <h3>Details:</h3>
                    <p>Выберите автомобиль...</p>
                </div>);
        }
        return (
            <div>
                <h3>Details:</h3>
                {/* <p>{this.getData(this)}</p>
                <h2>{this.result.name}</h2>
                <img src={this.result.img} /><br />
                <p>{this.result.url}</p> */}
                <h2>{this.props.car.name}</h2>
                <img width="300px" src={this.props.car.covers.original} /><br />
                <p>{this.props.car.fields[0]}</p>
                {/* <h2>Скорость: {this.props.car.speed},
                вес: {this.props.car.weight}</h2>  */}
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.active
    };
}

export default connect(mapStateToProps)(Details);
