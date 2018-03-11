import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';


class Details extends Component {
    constructor(props) {
        super(props);
        this.Be = new Behance('e1A607WbYauktG2el5XT2dbZriXROx4T');
    }
    render() {
        if (!this.props.car) {
            return (<p>Выберите автомобиль...</p>);
        }
        return (
            <div>
                {this.Be.projects({ q: 'motorcycle'}, function (err, res, data) {
                    if (err) throw err;
                    return data;//console.dir(data);
                })}
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
