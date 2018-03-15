import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';


class Details extends Component {
    constructor(props) {
        super(props);
        this.result = {name:"",img:"",url:""}
        this.getData = this.getData.bind(this);
        // this.Be = new Behance('e1A607WbYauktG2el5XT2dbZriXROx4T');
    }

    getData(th){
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
            return (<p>Выберите автомобиль...</p>);
        }
        return (
            <div>
                {/* <p>{this.getData(this)}</p>
                <h2>{this.result.name}</h2>
                <img src={this.result.img} /><br />
                <p>{this.result.url}</p> */}
                <h2>{this.props.car.name}</h2>
                <img src={this.props.car.img} /><br />
                <p>{this.props.car.desc}</p>
                <h2>Скорость: {this.props.car.speed},
                вес: {this.props.car.weight}</h2>
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
