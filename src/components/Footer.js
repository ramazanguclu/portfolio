import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="contact" className="page-footer white lighten-2 section scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <p className="black-text text-lighten-4">
                                by <b>ramazanguclu</b> follow me on <b><a href="https://github.com/ramazanguclu">github</a></b>.
                            </p>

                            <p className="black-text text-lighten-4">Email: ramazanguclu33@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer-copyright black-text text-darken-5">
                        © {new Date().getFullYear()} ramazanguclu.com, All rights reserved.
                        <a href="https://github.com/ramazanguclu/portfolio/blob/master/LICENSE">MIT License</a>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;