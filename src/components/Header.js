import React, { Component } from 'react';
import sections from '../data/Sections';

class Header extends Component {
    renderSections() {
        return sections.map((v, k) => {
            return <li key={k}><a href={'#' + v.id}>{v.title}</a></li>;
        });
    }

    render() {
        return (
            <header>
                <div className="navbar-fixed">
                    <nav className="top-nav white">
                        <div className="container">
                            <div className="nav-wrapper">

                                <div className="row">
                                    <div className="col s12  m12">
                                        <ul className="section table-of-contents">
                                            {this.renderSections()}
                                            <li><a href={'#contact'}>Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;