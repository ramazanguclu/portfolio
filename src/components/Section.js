import React, { Component } from 'react';

class Section extends Component {
    render() {
        const { _id, title, func } = this.props;

        return (
            <div id={_id} className="section scrollspy">
                <h3 className="header blue-text text-lighten-2">{title}</h3>
                {func()}
            </div>
        )
    }
}

export default Section;