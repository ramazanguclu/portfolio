import React, { Component } from 'react';
import Card from './Card';
import Bar from './Bar';
import works from '../data/Works';
import skils from '../data/Skils';
import courses from '../data/Courses';

class Section extends Component {
    getAge(bornDate) {
        return new Date().getFullYear() - bornDate;
    }

    renderWorks() {
        return works.map((v, k) => {
            return (
                <Card
                    key={k}
                    title={v.company + ' - ' + v.position}
                    startDate={v.startDate}
                    endDate={v.endDate}
                    link={v.companyLink}
                    desc1={'Projects: ' + v.projects}
                    desc2={'Used Tech: ' + v.usedTech}
                />
            );
        });
    }

    renderSkils() {
        return skils.map((v, k) => {
            return (
                <Bar
                    key={k}
                    title={v.skil}
                    percent={v.percent}
                />
            )
        });
    }

    renderCourses() {
        return courses.map((v, k) => {
            return (
                <Card
                    key={k}
                    title={v.company}
                    startDate={v.startDate}
                    endDate={v.endDate}
                    link={v.companyLink}
                    desc1={'Projects: '}
                    desc1Data={v.projects}
                    desc2={'Learned Tech: ' + v.learnedTech}
                />
            );
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m9 l10">

                        <div id="about" className="section scrollspy">
                            <h3 className="header blue-text text-lighten-2">About</h3>

                            <div className="row">
                                <div className="col s12">
                                    <div className="card-panel grey lighten-5 z-depth-1">
                                        <div className="row valign-wrapper">
                                            <div className="col s2">
                                                <img src="myphoto.png" alt="" className="circle responsive-img" /> </div>
                                            <div className="col s10">
                                                <span className="black-text">
                                                    Hi, My name is Ramazan. I am {this.getAge(1993)} and Computer Engineer - Software Developer. Coding is my passion.
                                                    <a href="https://www.linkedin.com/in/gclramazan"> Click for my linkedin profile.</a>
                                                </span>
                                                <p>Kocaeli University - Computer Engineering (2011 - 2015)</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="works" className="section scrollspy">
                            <h3 className="header blue-text text-lighten-2">Recently Works</h3>

                            {this.renderWorks()}

                        </div>

                        <div id="skils" className="section scrollspy">
                            <h3 className="header blue-text text-lighten-2">Skils</h3>

                            <div className="row">
                                {this.renderSkils()}
                            </div>
                        </div>


                        <div id="courses" className="section scrollspy">
                            <h3 className="header blue-text text-lighten-2">Courses</h3>

                            <div className="row">
                                {this.renderCourses()}
                            </div>
                        </div>


                    </div>

                    <div className="col hide-on-small-only m3 l2">
                        <div className="toc-wrapper pinned">
                            <ul className="section table-of-contents">
                                <li><a href="#about">About</a></li>
                                <li><a href="#works">Recently Works</a></li>
                                <li><a href="#skils">Skils</a></li>
                                <li><a href="#courses">Courses</a></li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div >
        );
    }
}

export default Section;