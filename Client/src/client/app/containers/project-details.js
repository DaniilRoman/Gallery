import React, { Component } from 'react';
import { connect } from 'react-redux';
import Behance from 'behance-api';
import { Link } from 'react-router-dom';


class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.project) {
            return (
                <div>
                    <h3>Details:</h3>
                    <p>Такого проекта не существует</p>
                    <Link to='/'>Back</Link>
                </div>);
        }
        return (
            <div className="container">
                <h3>Details:</h3>
                <h2>{this.props.project.name}</h2>
                <img width="300px" src={this.props.project.covers.original} /><br />
                <p>{this.props.project.fields[0]}</p>
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        project: state.active
    };
}

export default connect(mapStateToProps)(Details);
