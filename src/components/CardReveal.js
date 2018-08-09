import React, { Component } from 'react';

class CardReveal extends Component {

    render() {
        const { title, link, image, desc1, desc2 } = this.props;

        return (
            <div className="col s12 m6 l4">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img alt="" className="activator" src={image} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">
                            <span className="custom-truncate">{title}</span>
                            <i className="material-icons right">more_vert</i>

                        </span>
                        <p><a className="truncate" style={{ height: '30px' }} href={link}>{link}</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                        <p>{desc1}</p>
                        <p>{desc2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardReveal;