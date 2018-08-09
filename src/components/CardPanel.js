import React, { Component } from 'react';
import badge from '../data/Badge';

class CardPanel extends Component {
    getAge(bornDate) {
        return new Date().getFullYear() - bornDate;
    }

    render() {
        const { name, birthYear, job, motto, image, linkedin, university, highSchool } = badge;
        
        return (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">

                            <div className="col s12 m4">
                                <img src={image} alt="" className="circle responsive-img" />
                            </div>

                            <div className="col s12 m8">
                                <span className="black-text">
                                    Hi, My name is {name}. I am {this.getAge(birthYear)} and {job}. {motto}.
                                <a href={linkedin}> Click for my linkedin profile.</a>
                                </span>
                                <p>{university}</p>
                                <p>{highSchool}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPanel;