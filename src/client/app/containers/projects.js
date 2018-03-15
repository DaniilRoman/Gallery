import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';

class CarsList extends Component {
    showList() {
        let result = [];
        this.props.Be.projects({q: 'cars'}, function (err, res, data) {
            if (err) throw err;
            console.dir(JSON.parse(res.body).projects);
            result = JSON.parse(res.body).projects;
        });
        return result.map((car) => {
            return <li onClick={() => this.props.select(car)}
                key={car.id}>{car.name}</li>;
        })
    };

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars,
        Be: state.BehanceAPI
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ select: select }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarsList);
