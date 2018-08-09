import React, { Component } from 'react';
import sections from '../data/Sections';
import Section from './Section';

class Main extends Component {
    renderSections() {
        return sections.map((v, k) => {
            return (
                <Section
                    key={k}
                    _id={v.id}
                    title={v.title}
                    func={v.func}
                />
            )
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m9 l10">
                        {this.renderSections()}
                    </div>
                </div>
            </div >
        );
    }
}

export default Main;