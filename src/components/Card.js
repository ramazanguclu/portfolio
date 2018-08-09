import React, { Component } from 'react';

class Card extends Component {
    
    renderProjects(data) {
        return data.map((v, k) => {
            return (
                <div key={k}>
                    <a className="black-text text-lighten-4" href={v}>{v}</a><br />
                </div>
            )
        });
    }

    render() {
        const data = this.props;

        return (
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title"><a className="white-text" href={data.link}>{data.title}</a></span>
                            {data.desc1} {this.renderProjects(this.props.desc1Data || [])}
                            <p>{data.desc2}</p>
                        </div>
                        <div className="card-action">
                            <a>{data.startDate}</a>
                            <a>{data.endDate}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;