import React, { Component } from 'react';

class Bar extends Component {
    render() {
        return (
            <div className="row">
                <h6>{this.props.title}</h6>
                <div className="progress">
                    <div className="determinate" style={{ width: this.props.percent + '%' }}></div>
                </div>
            </div>
        )
    }
}

export default Bar;